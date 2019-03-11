import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {

  constructor(private _http:HttpClient) {}

  getJob(){
    return this._http.get(`http://127.0.0.1:4000/company/jobs`)
    };

    getJobById(id) {
      return this._http.get(`http://127.0.0.1:4000/company/job/${id}`)
    };

    getJobByCompanyId(id) {
      return this._http.get(`http://127.0.0.1:4000/company/${id}/job`)
    }
}