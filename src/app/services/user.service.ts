import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : 'my-auth-token'
  })
}


@Injectable()
export class UserService {

  userPostURL:string = "http://demo8499217.mockable.io/user";
  authenticateURl: string = "http://demo8499217.mockable.io/authenticate";

  //?uName='kim'&pwd='abc'
  constructor(private httpClient:HttpClient) { 

  }

  createUser(user):Observable<string>{
   return this.httpClient.post<string>(this.userPostURL,user,httpOptions)
  }

  AutenticateUser(userDetails):Observable<any>{
    return this.httpClient.post<string>(this.authenticateURl,userDetails,httpOptions)
  }
}
