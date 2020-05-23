import { ReportService } from './report.service';
import { MeetingService } from './meeting.service';
import { AccountService } from './account.service';
import { EmployeeService } from './employee.service';
import { AuthenticationService } from './authentication.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthenticationService,
    EmployeeService,
    AccountService,
    MeetingService,
    ReportService
  ]
})
export class ServicesModule { }
