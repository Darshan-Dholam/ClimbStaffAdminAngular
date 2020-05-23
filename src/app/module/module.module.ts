import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { LoginComponent } from './login/login.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from '../module/page-not-found/page-not-found.component';
import { EmpAccountsComponent } from './emp-accounts/emp-accounts.component';
import { EmpMeetingsComponent } from './emp-meetings/emp-meetings.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { EmpAccountDetailsComponent } from './emp-account-details/emp-account-details.component';
import { EmpMeetingDetailsComponent } from './emp-meeting-details/emp-meeting-details.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports/reports.component';
import { AttendanceReportComponent } from './reports/attendance-report/attendance-report.component';
import { MeetingReportComponent } from './reports/meeting-report/meeting-report.component';
import { AccountReportComponent } from './reports/account-report/account-report.component';
import { AttendanceReportPipe } from './reports/attendance-report/attendance-report.pipe';
import { MapViewComponent } from './map-view/map-view.component';


@NgModule({
  declarations: [
    LoginComponent,
    EmpDashboardComponent,
    EmpDetailsComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmpAccountsComponent,
    EmpMeetingsComponent,
    AccountsComponent,
    MeetingsComponent,
    EmpAccountDetailsComponent,
    EmpMeetingDetailsComponent,
    HomeComponent,
    ReportsComponent,
    AttendanceReportComponent,
    MeetingReportComponent,
    AccountReportComponent,
    AttendanceReportPipe,
    MapViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCh1OVztLr8y3Q1QjDPSOVCq2Kt-p2Q9hE'
    }),
    AngularSvgIconModule.forRoot(),
  ]
})
export class ModuleModule { }
