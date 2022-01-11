import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { IUser } from '../models/model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    private refreshSubject: Subject<any> = new Subject<any>();

    constructor(private authenticationService: AuthenticationService,
    ) {

    }

    private ifTokenExpired(): Subject<any> {
        this.refreshSubject.subscribe({
            complete: () => {
                this.refreshSubject = new Subject<any>();
            }
        });

        return this.refreshSubject;
    }

    private checkTokenExpiryErr(error: HttpErrorResponse): boolean {
        return (
            error.status !== undefined &&
            error.status === 401 &&
            error.statusText === 'Unauthorized'
        );
    }

    addAuthHeader(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            const newParams = new HttpParams({ fromString: req.params.toString() });
            req = req.clone({
                headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
                params: newParams
            });
        }
        return req;
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        request = request.clone({
            withCredentials: true,
            headers: new HttpHeaders()
          });
        return next.handle(request);
    }
}
