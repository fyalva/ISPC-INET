import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError, BehaviorSubject, tap, map } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id: 0, email:'', password:''});
  /* Utilizar sesion storage para que el usuario no se tenga que loguear a cada rato */

  /*constructor(private http: HttpClient) { }*/

 
  url = 'https://fakestoreapi.com';
  currentUserSubject: BehaviorSubject<any>;
  sessionStorage: any;
      /*linkear*/


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  httpOp = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(email: string, password: string): Observable<any> {
    const body = {
      deviceInfo: {
        deviceId: '1',
        deviceType: 'DEVICE_TYPE_ANDROID',
        notificationToken: 'Non',
      },
      email: email,
      password: password,
    };

  /*desde acá nos comunicamos a la Api reemplazando data por url*/

  return this.http.post(`${this.url}/users`, body, this.httpOp).pipe(map(info=>{
    sessionStorage
    .setItem('currentUser', JSON.stringify(info));
    //this.currentUserData.next(info);
    console.log("authentication service running..." + JSON.stringify(info));
    return info;
  }));
}

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producido un error', error.error);
    }

    else {
      console.error('Backend retornó el código de estado', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente'));
  }

  get userData(): Observable<User>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

}



