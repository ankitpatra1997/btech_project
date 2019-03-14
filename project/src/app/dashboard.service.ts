import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getJob() {
    return this._http.get(`http://127.0.0.1:4000/company/jobs`)
  };

  getJobById(id) {
    return this._http.get(`http://127.0.0.1:4000/company/job/${id}`)
  };

  getJobByCompanyId(id) {
    return this._http.get(`http://127.0.0.1:4000/company/${id}/job`)
  }

  changeStatus(a, id) {
    return this._http.put(`http://127.0.0.1:4000/company/job/${id}`,
      {
        "status": a
      })
      .subscribe(
        val => {
          console.log("PUT call successful value returned in body",
            val);
        },
        response => {
          console.log("PUT call in error", response);
        },
        () => {
          console.log("The PUT observable is now completed.");
        }
      );
  }
}