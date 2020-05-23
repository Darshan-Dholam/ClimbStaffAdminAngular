import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce } from 'lodash';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {

  public employees = [];
  error = '';
  user = JSON.parse(localStorage.getItem('currentUser'));
  visibleIndex = -1;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    ) {
      this.onSearchChange = debounce(this.onSearchChange, 1500);

    }

  ngOnInit() {
    this.employeeService.getEmployees(this.user.cid)
    .subscribe( data => {
      this.employees = data['data']
    },
    error => {
      console.log(this.error);
    });
  }

  redirectEmployeeDetails(employeeId: number) {
    this.router.navigate(['/emp/details' , employeeId ]);
  }

  redirectAccountDetails(employeeId: number) {
    this.router.navigate(['/emp/account' , employeeId ]);
  }

  redirectMeetingDetails(employeeId: number) {
    this.router.navigate(['/emp/meeting' , employeeId ]);
  }

  onSearchChange(searchValue: string): void {
    this.employeeService.getSearchedEmployees(this.user.cid, searchValue)
    .subscribe( data => {
      this.employees = data['data']
    },
    error => {
      console.log(this.error);
    });
  }

  showSubItem(ind) {
    if (this.visibleIndex === ind) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = ind;
    }
  }

}
