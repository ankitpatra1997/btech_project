import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../user.service';
import { StudentService } from '../../student.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  userData: any = {};
  constructor(private _formBuilder: FormBuilder,private _userService: UserService, private _http:HttpClient) 
  {
    let selfIns = this;
    this._userService.getUserById().subscribe(
      data => {
        console.log(data);
            selfIns.userData = data;
        },
      err => console.log(err) 
    )
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      
      phone: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      houseNo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
      
    });
    this.thirdFormGroup = this._formBuilder.group({
      Tenthboard: ['',Validators.required],
      TenthYOP: ['',Validators.required],
      Tenthpercentage: ['',Validators.required],
      intermediateEducation:['',Validators.required],
      intermediateBoard:['',Validators.required],
      intermediateYop :['',Validators.required],
      intermediatePercentage :['',Validators.required],
      GraduationDegree :['',Validators.required],
      Graduationstream :['',Validators.required],
      Graduationcgpa :['',Validators.required],
      GraduationYOP :['',Validators.required],
    });

    this.fourthFormGroup = this._formBuilder.group({
      resume: ['',Validators.required],
    });
  }

  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
    this._userService.updateUser(JSON.stringify({PersonalDetails:this.secondFormGroup.value}))
    .subscribe(
      data => {console.log(data);},
      err => {console.error(err);}
    )
  }

  form3(){
    console.log(this.thirdFormGroup.value);
    this._userService.updateUser(JSON.stringify({EducationalDetails:this.thirdFormGroup.value}))
    .subscribe(
      data => {console.log(data);},
      err => {console.error(err);}
    )
  }

  form4(){
    console.log(this.fourthFormGroup.value);
  }

  postMethod(files: FileList) {
    let fileToUpload = files.item(0); 
    let formData = new FormData(); 
    formData.append('file', fileToUpload, fileToUpload.name); 
    this._http.put(`http://127.0.0.1:4000/uploads`, formData).subscribe((val) => {
    
    console.log(val);
    });
    return false; 
    }

}