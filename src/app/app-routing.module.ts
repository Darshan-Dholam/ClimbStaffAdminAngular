import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './module/login/login.component';
import { EmpDashboardComponent } from './module/emp-dashboard/emp-dashboard.component';
import { EmpDetailsComponent } from './module/emp-details/emp-details.component';
import { SettingsComponent } from './module/settings/settings.component';
import { PageNotFoundComponent } from './module/page-not-found/page-not-found.component';
import { EmpAccountsComponent } from './module/emp-accounts/emp-accounts.component';
import { EmpMeetingsComponent } from './module/emp-meetings/emp-meetings.component';
import { AccountsComponent } from './module/accounts/accounts.component';
import { MeetingsComponent } from './module/meetings/meetings.component';
import { EmpAccountDetailsComponent } from './module/emp-account-details/emp-account-details.component';
import { EmpMeetingDetailsComponent } from './module/emp-meeting-details/emp-meeting-details.component';
import { AttendanceReportComponent } from './module/reports/attendance-report/attendance-report.component';
import { MeetingReportComponent } from './module/reports/meeting-report/meeting-report.component';
import { AccountReportComponent } from './module/reports/account-report/account-report.component';
import { HomeComponent } from './module/home/home.component';
import { ReportsComponent } from './module/reports/reports/reports.component';
import { MapViewComponent } from './module/map-view/map-view.component';

import { HeaderFooterLayoutComponent } from './layout/header-footer-layout/header-footer-layout.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  // {path: '' , redirectTo: '/login', pathMatch: 'full' },
  {path: 'login' , component: LoginComponent },
  {path: '' , component: HeaderFooterLayoutComponent, canActivate: [AuthGuard],
    children:
    [
      {path: '' , component: HomeComponent },
      {path: 'dashboard' , component: EmpDashboardComponent },
      {path: 'home' , component: HomeComponent },
      {path: 'emp/details/:empid' , component: EmpDetailsComponent },
      {path: 'emp/account/:empid' , component: EmpAccountsComponent },
      {path: 'emp/meeting/:empid' , component: EmpMeetingsComponent },
      {path: 'emp/account/detail/:acid' , component: EmpAccountDetailsComponent },
      {path: 'emp/meeting/detail/:mid' , component: EmpMeetingDetailsComponent },
      {path: 'account' , component: AccountsComponent },
      {path: 'meeting' , component: MeetingsComponent },
      {path: 'reports' , component: ReportsComponent },
      {path: 'reports/attendance' , component: AttendanceReportComponent },
      {path: 'reports/meeting' , component: MeetingReportComponent },
      {path: 'reports/account' , component: AccountReportComponent },
      {path: 'settings' , component: SettingsComponent },
      {path: 'mapview' , component: MapViewComponent },
    ]
  },
  {path: '**' , component: PageNotFoundComponent }  // Need to declare Last
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HeaderFooterLayoutComponent,
];

