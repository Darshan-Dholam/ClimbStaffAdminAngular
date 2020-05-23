import { MeetingService } from './../../services/meeting.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  public recents = [];
  public upcomings = [];
  error = '';
  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private meetingService: MeetingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.meetingService.getMeetings(this.user.cid)
    .subscribe( data => {
      this.recents = data['data'].recent;
      this.upcomings = data['data'].upcoming;
    },
    error => {
      console.log(this.error);
    });
  }

  onSelect(meetingid: number) {
    this.router.navigate(['/emp/meeting/detail' , meetingid ]);
  }

}
