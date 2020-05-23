import { MeetingService } from './../../services/meeting.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-emp-meeting-details',
  templateUrl: './emp-meeting-details.component.html',
  styleUrls: ['./emp-meeting-details.component.scss']
})
export class EmpMeetingDetailsComponent implements OnInit {

  empName: string;
  meetingWith: string;
  status: string;
  meetingTime: string;
  locationAddress: string;
  public meeting = [];
  public notes = [];
  mid = this.activatedRoute.snapshot.params.mid;
  error = '';

  constructor(
    private meetingService: MeetingService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.meetingService.getMeetingDetail(this.mid)
    .subscribe( data => {
      this.meeting = data['data'];
      this.notes = data['data']['notes'];
      this.empName = this.meeting['name'] ;
      this.meetingWith = this.meeting['name'] ;
      this.status = this.meeting['status_name'] ;
      this.meetingTime = this.meeting['meeting_date'] ;
      this.locationAddress = this.meeting['address'] ;
    },
    error => {
      console.log(this.error);
    });
  }

  goBack() {
    this.location.back();
  }

}
