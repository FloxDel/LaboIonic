import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginModel } from '../model/login.model';
import { TokenModel } from '../model/token.model';
import { RegisterModel } from 'app/Model/register.model';


@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  isConnected = localStorage.getItem('token') ? true : false;
  connected$ = new Subject<boolean>();


  constructor(private readonly http: HttpClient) { }


  // login(model: LoginModel) : Observable<TokenModel> {
  //   return this._http.post<{ token: string, user: UserModel}>(environment.apiUrl + '/login', model).pipe(
  //     map(({token, user}) => <TokenModel>({
  //       token: token,
  //       ...user
  //     }))
  //   );
  // }
login(model: LoginModel)
{
  this.isConnected = true;
  this.http.post<TokenModel>('http://localhost:53448/api/Auth/auth',model).subscribe(
    {next : (data: TokenModel) =>  {localStorage.setItem('token',data.token);}});
  this.connected$.next(this.isConnected);
}

register(reg: RegisterModel): Observable<RegisterModel> {
  return this.http.post<RegisterModel>('http://localhost:53448/posts', reg);
}
logout()
{
  this.isConnected = false;
  this.connected$.next(this.isConnected);
  localStorage.clear();
  //this._admin$.next(this.isAdmin)
}
// get ConnectionStatus(): Observable<boolean>{
//   return this._Connected$.asObservable();
// }

}
