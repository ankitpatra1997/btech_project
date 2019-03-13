import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  err: string;
  hide=true;

  isLoggedIn: Boolean;

  constructor(private _user: UserService, private _router: Router) { }
  
  loginForm: FormGroup;

/*  getUrl()
{
  return "url('http://blog.hostbaby.com/wp-content/uploads/2014/03/Trees_1920x1234.png')";
} */

  submit(){
    if(this.loginForm.valid){
     console.log(this.loginForm.value);
      this._user.login(JSON.stringify(this.loginForm.value))
        .subscribe(
          (data: any) => {
            localStorage.setItem("uid",data._id);
            if(data.typeOfUser == "student") 
              this._router.navigate(['/student/dashboard']);
            else if(data.typeOfUser == "company")
            this._router.navigate(['/company/dashboard']);
            },
          err => {console.error(err); this.err="Invalid username or password"; }
        )
    }else{
      return;
    }
  } 

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    })
  }

}
