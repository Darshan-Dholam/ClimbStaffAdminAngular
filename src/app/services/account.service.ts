import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private http: HttpClient ) { }

  getAccounts( compid: number) {
    return this.http.get(`${environment.apiUrl}/account/list/` + compid );
  }

  getEmpAccount( user_id: number, type_id: number, start_date: string, end_date: string) {
    return this.http.post(`${environment.apiUrl}/account/find/category`, { user_id, type_id, start_date, end_date  })
    .pipe(map(account => account));
  }

  getAccountDetail( acid: number) {
    return this.http.get(`${environment.apiUrl}/account/` + acid);
  }
}
