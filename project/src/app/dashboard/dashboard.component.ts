import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jobData: any = {};
  constructor(private _dashboard:DashboardService, private _router: Router) {
    // this._user.user()
    //   .subscribe(
    //     data => console.log(data),
    //     err => this._router.navigate(['/login'])
    //   )
    let selfIns = this;
    this._dashboard.getJob().subscribe(
      data => {
        console.log(data);
            selfIns.jobData = data;
        },
      err => console.log(err) 
    )
  }

  ngOnInit() {
  }

}
