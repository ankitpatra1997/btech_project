import { Component, OnInit } from '@angular/core';

export interface JobPosts {
  position: number;
  jobtitle: string;
  dateofposting: string;
  applicants: number;
  status: string;
}

const ELEMENT_DATA: JobPosts[] = [
  {position: 1, jobtitle: 'Web Designer', dateofposting: '25 December 2018', applicants: 12, status: 'active'},
  {position: 2, jobtitle: 'Web Developer', dateofposting: '25 October 2018', applicants: 20, status: 'Closed'},
  {position: 3, jobtitle: 'Graphics Designer', dateofposting: '25 September 2018', applicants: 1, status: 'Closed'},
];

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit { 
  displayedColumns: string[] = ['position', 'jobtitle', 'dateofposting', 'applicants', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
