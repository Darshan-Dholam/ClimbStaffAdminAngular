import { MeetingService } from './../../services/meeting.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-meetings',
  templateUrl: './emp-meetings.component.html',
  styleUrls: ['./emp-meetings.component.scss'],
  providers: [
    DatePipe
  ]
})
export class EmpMeetingsComponent implements OnInit {

  todate = new Date();
  fromdate = this.todate.setDate(this.todate.getDate() - 7);
  todayString: string = new Date().toDateString();
  public meetings = [];
  error = '';
  empid = this.activatedRoute.snapshot.params.empid;
  empName: string;

  constructor(
    private meetingService: MeetingService,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.meetingService.getEmpMeeting(this.empid, this.datePipe.transform( this.fromdate, 'yyyy/MM/dd')  , this.datePipe.transform( this.todayString, 'yyyy/MM/dd') )
      .pipe(first())
      .subscribe(
        data =>
        {
          this.meetings = data['data'];
        },
        error =>
        {
          console.log(this.error);
        });

    this.employeeService.getEmployeeDetail(this.empid)
        .subscribe (data => {
          this.empName = data['data'][0]['name'];
        },
        error => {
          console.log(this.error);
        });
  }

  onSelect(meetingid: number) {
    this.router.navigate(['/emp/meeting/detail' , meetingid ]);
  }


}
