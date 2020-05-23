import { Router } from '@angular/router';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  public incomes = [];
  public expenses = [];
  error = '';
  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.accountService.getAccounts(this.user.cid)
    .subscribe( data => {
      this.incomes = data['data'].income;
      this.expenses = data['data'].expense;
    },
    error => {
      console.log(this.error);
    });
  }

  onSelect(accountid: number, accountName: string) {
    localStorage.setItem('account_employee', accountName);

    this.router.navigate(['/emp/account/detail' , accountid ]);
  }


}
