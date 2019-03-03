import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private _user:UserService, private _router: Router) {
    // this._user.user()
    //   .subscribe(
    //     data => console.log(data),
    //     err => this._router.navigate(['/login'])
    //   )
  }

  ngOnInit() {
  }

}
