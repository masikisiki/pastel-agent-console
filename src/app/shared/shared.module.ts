import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import {  MatListModule } from '@angular/material/list';
import {  RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';

import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, AreaComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatInputModule,
    HighchartsChartModule
  ],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, AreaComponent]
})
export class SharedModule { }
