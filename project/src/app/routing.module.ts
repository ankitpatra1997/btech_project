import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './dashboard/view/view.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyComponent } from './company/company.component';
import { CompanyRegisterComponent } from './register/company-register/company-register.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentRegisterComponent } from './register/student-register/student-register.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { CompanyJobpostComponent } from './company/company-jobpost/company-jobpost.component';
import { CompanyViewApplicantsComponent } from './company/company-view-applicants/company-view-applicants.component';
import { CompanyViewJobComponent } from './company/company-viewjob/company-viewjob.component';
import { from } from 'rxjs';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'dashboard/view', component: ViewComponent, pathMatch: 'full' },
  { path: 'company', component: CompanyComponent, children: [
    { path: 'dashboard', component: CompanyDashboardComponent, pathMatch: 'full' },
    { path: 'jobpost', component: CompanyJobpostComponent, pathMatch: 'full' },
    { path: 'viewapplicants', component: CompanyViewApplicantsComponent, pathMatch: 'full'},
    { path: 'viewjob', component: CompanyViewJobComponent, pathMatch: 'full'}
  ] },
  { path: 'student', component: StudentComponent, children: [
    { path: 'dashboard', component: StudentDashboardComponent, pathMatch: 'full' },
    { path: 'profile', component: StudentProfileComponent, pathMatch: 'full' }
  ] },
  { path: 'register', component: RegisterComponent, children: [
    { path: 'student-register', component: StudentRegisterComponent, pathMatch: 'full' },
    { path: 'company-register', component: CompanyRegisterComponent, pathMatch: 'full' }
  ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
