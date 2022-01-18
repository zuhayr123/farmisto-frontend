import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { IUser } from '../models/model';
import { LoginService } from './user-login.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;

    constructor(private http: HttpClient, private router: Router,
        private userService : LoginService) {
        const currentUser: any = JSON.parse(localStorage.getItem('currentUser') as string);
        this.currentUserSubject = new BehaviorSubject<IUser>(currentUser ? currentUser : null);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): IUser {
        return this.currentUserSubject.value;
    }

    loginAfterVerification(data:any){
      const user = this.getPayLoad(data);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(data);
      return true;
    };

    public getPayLoad(token: string): IUser {
        const decoded = jwt_decode(token);
        return decoded as IUser;
    }

    public logout(): void {
        this.userService.logout().subscribe( () => {
             // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null as any);
            this.router.navigate(['']);
        });
    }

    public clearUserData(): void {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null as any);
    }
}
