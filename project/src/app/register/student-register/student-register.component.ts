import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  studentRegister: FormGroup;
  emailErr: string;
  submitted = false;
  loading = false;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.studentRegister = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'typeOfUser': new FormControl("student")
    });
  }
  get f() { return this.studentRegister.controls; }
  onSubmit() 
  {
    this.submitted = true;
    // stop here if form is invalid
    if (this.studentRegister.invalid) 
    {
        return;
    }
  //}
 // save(){
  
    if(this.studentRegister.valid){
      this.loading = true;
      // console.log(this.companyRegister.value);
      this._userService.register(JSON.stringify(this.studentRegister.value))
        .subscribe(
          data => {console.log(data);alert("Registered Suessfully");this._router.navigate(['/login']);},         
          err => {console.error(err); if(err.error.code == 11000) {this.emailErr="Email already exists";} }
        )
    }
   // else{
  //    return;
   // }
  }
}