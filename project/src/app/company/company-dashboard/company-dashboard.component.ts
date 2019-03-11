import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit { 
  displayedColumns: string[] = ['jobtitle', 'dateofposting', 'applicants', 'status'];
  dataSource = this._dashboard.getJobByCompanyId(localStorage.getItem("uid"));



  constructor(private _dashboard:DashboardService) { }

  ngOnInit() {
  }

}
