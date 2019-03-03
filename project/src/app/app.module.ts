import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentNavbarComponent } from './student/student-navbar/student-navbar.component';
import { CompanyNavbarComponent } from './company/company-navbar/company-navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './dashboard/view/view.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { CompanyComponent } from './company/company.component';
import { CompanyRegisterComponent } from './register/company-register/company-register.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CompanyJobpostComponent } from './company/company-jobpost/company-jobpost.component';
import { CompanyViewApplicantsComponent } from './company/company-view-applicants/company-view-applicants.component';
import { CompanyViewJobComponent } from './company/company-viewjob/company-viewjob.component';
import { UserService } from './user.service';
import { JobPostService } from './jobpost.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentRegisterComponent } from './register/student-register/student-register.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    DashboardComponent,
    ViewComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    CompanyComponent,
    CompanyRegisterComponent,
    CompanyDashboardComponent,
    CompanyJobpostComponent,
    CompanyViewApplicantsComponent,
    CompanyViewJobComponent,
    StudentRegisterComponent,
    StudentDashboardComponent,
    StudentNavbarComponent,
    CompanyNavbarComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, JobPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
