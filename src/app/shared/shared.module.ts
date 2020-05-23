import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavbarComponent,
    CardTitleComponent,
    CardBodyComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavbarComponent,
    CardComponent,
    CardTitleComponent,
    CardBodyComponent
  ]
})
export class SharedModule { }
