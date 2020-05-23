import { ReportService } from './../../services/report.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('currentUser'));
  error = '';

  // Attendance PieChart
  public attendancePieChartOptions: any = {
    responsive: true,
    // legend: { display: false },
  };
  public attendancePieChartColors: Colors[] = [
   { backgroundColor: []},
  ];
  public attendancePieChartLabels: Label[];
  public attendancePieChartData: SingleDataSet = [];
  public attendancePieChartType: ChartType = 'pie';
  public attendancePieChartLegend = true;
  public attendancePieChartPlugins = [];

  // Meeting PieChart
  public meetingPieChartOptions: any = {
    responsive: true,
    // legend: { display: false },
  };
  public meetingPieChartColors: Colors[] = [
   { backgroundColor: []},
  ];
  public meetingPieChartLabels: Label[];
  public meetingPieChartData: SingleDataSet = [];
  public meetingPieChartType: ChartType = 'pie';
  public meetingPieChartLegend = true;
  public meetingPieChartPlugins = [];

  public distance = [];
  public dutyDuration = [];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.bindDashboardPie();
    this.bindDashboardDutyDistance();
  }

  bindDashboardPie() {
    this.reportService.getDashboardPie(this.user.cid)
    .subscribe( data => {
        this.attendancePieChartLabels = data['data']['attendance_pie']['labels'];
        this.attendancePieChartData = data['data']['attendance_pie']['values'];
        this.attendancePieChartColors[0]['backgroundColor'] = data['data']['attendance_pie']['color'];

        this.meetingPieChartLabels = data['data']['meetings_pie']['labels'];
        this.meetingPieChartData = data['data']['meetings_pie']['values'];
        this.meetingPieChartColors[0]['backgroundColor'] = data['data']['meetings_pie']['color'];
      },
    error => {
      console.log(this.error);
    });
  }

  bindDashboardDutyDistance() {
    this.reportService.getDashboardDutyDistance(this.user.cid)
    .subscribe( data => {
        this.dutyDuration = data['data']['duty'];
        this.distance = data['data']['distance'];

    },
    error => {
      console.log(this.error);
    });
  }

}
