import { Component, OnInit } from '@angular/core';

export interface AppliedJobs {
  position: number;
  name: string;
  postedby: string;
  appliedon: string;
  status: string;
}

const ELEMENT_DATA: AppliedJobs[] = [
  {position: 1, name: 'HR', postedby: 'XYZ Infra LTD', appliedon: '2019-03-28', status: 'Applied'},
 
];

@Component({
  selector: 'app-student-appliedjobs',
  templateUrl: './student-appliedjobs.component.html',
  styleUrls: ['./student-appliedjobs.component.css']
})
export class StudentAppliedJobsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'postedby','appliedon','status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}