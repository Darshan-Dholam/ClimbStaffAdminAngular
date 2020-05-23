import { AccountService } from './../../services/account.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-emp-account-details',
  templateUrl: './emp-account-details.component.html',
  styleUrls: ['./emp-account-details.component.scss']
})
export class EmpAccountDetailsComponent implements OnInit {

  empName = localStorage.getItem('account_employee');
  description: string;
  amount: string;
  accountDate: string;
  public account = [];
  public notes = [];
  acid = this.activatedRoute.snapshot.params.acid;
  error = '';

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.accountService.getAccountDetail(this.acid)
    .subscribe( data => {
      this.account = data['data'];
      this.description = this.account['name'] ;
      this.amount = this.account['amount'] ;
      this.accountDate = this.account['date'];
      this.notes = (data['data']['notes'].length >= 1) ? data['data']['notes'] : [];

    },
    error => {
      console.log(this.error);
    });
  }

  goBack() {
    this.location.back();
  }

}
