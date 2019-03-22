import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {

  constructor(private _http:HttpClient) {}

  updateProfile(body: any){
    return this._http.post(`http://127.0.0.1:4000/student/${localStorage.getItem("uid")}/add`, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  applyJob(body: any){
    return this._http.post(`http://127.0.0.1:4000/student/${localStorage.getItem("uid")}/application/add`, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

}