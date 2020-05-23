import { SharedModule } from './../shared/shared.module';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFooterLayoutComponent } from './header-footer-layout/header-footer-layout.component';

import { EmpDashboardComponent } from '../module/emp-dashboard/emp-dashboard.component';
import { EmpDetailsComponent } from '../module/emp-details/emp-details.component';
import { EmpMapComponent } from '../module/emp-map/emp-map.component';
import { SettingsComponent } from '../module/settings/settings.component';

@NgModule({
  declarations: [
    HeaderFooterLayoutComponent,
    EmpDashboardComponent,
    EmpDetailsComponent,
    EmpMapComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
