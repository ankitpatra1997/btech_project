import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { MatSlideToggleChange } from '@angular/material';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit { 
  displayedColumns: string[] = ['jobtitle', 'dateofposting', 'applicants', 'status'];
  dataSource = this._dashboard.getJobByCompanyId(localStorage.getItem("uid"));

  public useDefault = false;

  public toggle(event: MatSlideToggleChange, a, id) {
      console.log('toggle', a);
      this.useDefault = event.checked;
      this._dashboard.changeStatus(a == "active" ? "closed" : "active", id);
      location.reload();
  } 

  constructor(private _dashboard:DashboardService) { }

  ngOnInit() {
  }

}
