import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor( private http: HttpClient) { }

  getAttendanceReport( company_id: number, user_id: string, fromdate: string, todate: string) {
    return this.http.post(`${environment.apiUrl}/report/attendance`, { company_id, user_id, fromdate, todate  })
    .pipe(map(meeting => meeting));
  }

  getDashboardPie( compid: number) {
    return this.http.get(`${environment.apiUrl}/dashboard/graph/status/` + compid );
  }

  getDashboardDutyDistance( compid: number) {
    return this.http.get(`${environment.apiUrl}/statistics/dashboard/duty-distance/` + compid );
  }
}
