import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DashboardService } from '../../dashboard.service';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-viewjob',
  templateUrl: './student-viewjob.component.html',
  styleUrls: ['./student-viewjob.component.css']
})
export class StudentViewJobComponent implements OnInit {

  getId(){
    return window.location.href.split("viewjob/")[1];
  }

  jobData: any = {};
  applyjob: FormGroup;

    constructor(private _dashboard:DashboardService, private route: ActivatedRoute, private _studentService:StudentService) { 

      console.log("id =", this.getId());
      let selfIns = this;
      this._dashboard.getJobById(this.getId()).subscribe(
      data => {
        console.log(data);
            selfIns.jobData = data;
            console.log("Company id =",this.jobData.companyID);
            selfIns.applyjob = new FormGroup({
              'jobID': new FormControl(selfIns.getId()),
              'companyID': new FormControl(this.jobData.companyID)
            });
            debugger;
        },
      err => console.log(err) 
    )
    }

    ngOnInit() { 

      
    }

    applyJob()
    {
      this._studentService.applyJob(JSON.stringify(this.applyjob.value))
      .subscribe(
        data => {console.log(data);alert("Applied Successfully !") ; },
        err => {console.error(err);}
      )
    }
}