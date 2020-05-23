import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor( private http: HttpClient) { }

  getMeetings(compid: number) {
    return this.http.get(`${environment.apiUrl}/meeting/list/` + compid );
  }

  getEmpMeeting( user_id: number, start_date: string, end_date: string) {
    return this.http.post(`${environment.apiUrl}/meeting/show`, { user_id, start_date, end_date  })
    .pipe(map(meeting => meeting));
  }

  getMeetingDetail( mid: number) {
    return this.http.get(`${environment.apiUrl}/meeting/details/` + mid);
  }
}
