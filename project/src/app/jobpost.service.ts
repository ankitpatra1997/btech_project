import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobPostService {

  constructor(private _http:HttpClient) {}

  addJob(body: any){
    return this._http.post(`http://127.0.0.1:4000/company/${localStorage.getItem("uid")}/job/add`, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}