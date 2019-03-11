import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      dob: ['', Validators.required],
      address: ['', Validators.required],
      houseno: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      tenthBoard: ['',Validators.required],
      tenthPercentage: ['',Validators.required],
      tenthYop: ['',Validators.required],
      intermediateEducation:['',Validators.required],
      intermediatePercentage :['',Validators.required],
      intermediateYop :['',Validators.required],
    });
  }
}