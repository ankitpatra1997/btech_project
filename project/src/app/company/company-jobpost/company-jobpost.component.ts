import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobPostService } from '../../jobpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-jobpost',
  templateUrl: './company-jobpost.component.html',
  styleUrls: ['./company-jobpost.component.css']
})
export class CompanyJobpostComponent implements OnInit {

  jobPost: FormGroup;

  constructor(private _jobpostService: JobPostService, private _router: Router) { }

  ngOnInit() {
    this.jobPost = new FormGroup({
      'companyid': new FormControl(localStorage.getItem("uid")),
      'name': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'qualification': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'salary': new FormControl(null, Validators.required),
      'experience': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  onSubmit() 
  {
    

    if (this.jobPost.invalid) 
    {
      alert("invalid");
        return;
    }
    if(this.jobPost.valid){
      console.log("Passed Message");
      console.log(this.jobPost.value);
      //alert(this.jobPost.value);
      this._jobpostService.addJob(JSON.stringify(this.jobPost.value))
        .subscribe(
          data => {console.log(data);alert("Congratulations !!! Job Posted Successfully !") ; location.reload();},
          err => {console.error(err); }
        )
    }
  }

}
