import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrls: ['./company-navbar.component.css']
})
export class CompanyNavbarComponent implements OnInit {

  constructor(private _user: UserService, private _router: Router) {}

  ngOnInit() {
  }

  isLoggedIn = true;

  // isLoggedIn(){
  //   this._user.check()
  //     .subscribe(
  //       data => console.log(data),
  //       err => console.log(err)
  //     );
  // }

  logout(){
    this.isLoggedIn = true;
    this._user.signout()
      .subscribe(
        data => { console.log(data), this._router.navigate(['/login']); },
        err => this._router.navigate(['/login'])
      )
  }

}
