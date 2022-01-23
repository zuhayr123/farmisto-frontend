import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(protected _http: HttpClient) {}
    base_url = "https://farmisto-develop-branch.herokuapp.com/api"
    // base_url = "http://localhost:5000/api"
    apiUrl = this.base_url + '/user';

    Base_url = "https://farmisto-learn.herokuapp.com/api"
    ApiUrl = this.Base_url + '/user';

    login(data:any):Observable<any>{
        console.log('here')
        return this._http.post<any>(this.apiUrl + '/login', data);
    }

    signup(data:any):Observable<any>{
        return this._http.post<any>(this.apiUrl + '/signup', data);
    }

    logout(): Observable<void> {
        return this._http.post<any>(this.apiUrl.concat('/logout'),'');
    }
}