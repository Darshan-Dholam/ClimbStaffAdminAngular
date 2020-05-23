import { ReportService } from './../../../services/report.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss'],
  providers: [
    DatePipe
  ]
})
export class AttendanceReportComponent implements OnInit {

  public reports = [];
  employeeSearch: string;
  date: string;
  error = '';
  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private reportService: ReportService,
    private datePipe: DatePipe

  ) { }

  ngOnInit(): void {
    this.bindReport();
  }

  bindReport()
  {
    // this.reportService.getAttendanceReport( this.user.cid, this.empid, this.datePipe.transform( this.fromdate, 'yyyy/MM/dd')  , this.datePipe.transform( this.todayString, 'yyyy/MM/dd') )
    this.reportService.getAttendanceReport( this.user.cid, '0' , '2020-01-01' , '2020-01-02' )
      .pipe(first())
      .subscribe(
        data =>
        {
          this.reports = data['data'];
          this.date = this.reports[0][1];
          console.log(this.reports);
          console.log(this.reports[0][0]);

        },
        error =>
        {
          console.log(this.error);
        });
  }

}
