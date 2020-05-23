import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-accounts',
  templateUrl: './emp-accounts.component.html',
  styleUrls: ['./emp-accounts.component.scss'],
  providers: [
    DatePipe
  ]
})
export class EmpAccountsComponent implements OnInit {

  todate = new Date();
  fromdate = this.todate.setDate(this.todate.getDate() - 7);
  todayString: string = new Date().toDateString();
  public incomes = [];
  public expenses = [];
  error = '';
  empid = this.activatedRoute.snapshot.params.empid;
  empName: string;
  balance: string;
  totIncome: string;
  totExpense: string;

  constructor(
    private accountService: AccountService,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {

    this.accountService.getEmpAccount(this.empid, 2, this.datePipe.transform( this.fromdate, 'yyyy/MM/dd')  , this.datePipe.transform( this.todayString, 'yyyy/MM/dd') )
      .pipe(first())
      .subscribe(
        data =>
        {
          this.incomes = data['data']['income'];
          this.expenses = data['data']['expense'];
          this.balance = data['data']['summary'].balance;
          this.totIncome = data['data']['summary'].total_income;
          this.totExpense = data['data']['summary'].total_expense;

        },
        error =>
        {
          console.log(this.error);
        });

    this.employeeService.getEmployeeDetail(this.empid)
        .subscribe (data => {
          localStorage.setItem('account_employee', data['data'][0]['name']);
          this.empName = data['data'][0]['name'];
        },
        error => {
          console.log(this.error);
        });
  }

  onSelect(accountid: number) {
    this.router.navigate(['/emp/account/detail' , accountid ]);
  }

}
