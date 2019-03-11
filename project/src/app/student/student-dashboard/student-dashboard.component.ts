import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  jobData: any = {};

  constructor(private _dashboard:DashboardService, private _router: Router) { 
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
