import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-company-viewjob',
  templateUrl: './company-viewjob.component.html',
  styleUrls: ['./company-viewjob.component.css']
})
export class CompanyViewJobComponent implements OnInit {

  getId(){
    return window.location.href.split("viewjob/")[1];
  }

  jobData: any = {};

    constructor(private _dashboard:DashboardService, private route: ActivatedRoute) { 

      console.log("id =", this.getId());
      let selfIns = this;
      this._dashboard.getJobById(this.getId()).subscribe(
      data => {
        console.log(data);
            selfIns.jobData = data;
        },
      err => console.log(err) 
    )
    }

    ngOnInit() { }

}