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
import { MatTableModule } from '@angular/material/table';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import {  MatListModule } from '@angular/material/list';
import {  RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { InvoiceDataTableComponent } from './widgets/invoice-data-table/invoice-data-table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InvoiceDtComponent } from './widgets/invoice-dt/invoice-dt.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AgGridModule } from 'ag-grid-angular';
import { DonutComponent } from './widgets/donut/donut.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, AreaComponent, InvoiceDtComponent, DonutComponent],
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
    HighchartsChartModule,
    ScrollingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AgGridModule.withComponents([])

  ],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, AreaComponent,InvoiceDtComponent, DonutComponent]
})
export class SharedModule { }
