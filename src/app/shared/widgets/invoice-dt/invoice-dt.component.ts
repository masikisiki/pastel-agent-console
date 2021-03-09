import { Observable, of } from 'rxjs';
import { Invoice } from './../../../models/invoice';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { PastelConfigService } from 'src/app/services/pastel-config.service';


@Component({
  selector: 'app-invoice-dt',
  templateUrl: './invoice-dt.component.html',
  styleUrls: ['./invoice-dt.component.scss']
})
export class InvoiceDtComponent implements OnInit {

  @ViewChild('agGrid')
  agGrid: AgGridAngular;

  invoices$: Observable<Invoice[]> = of([]);

  constructor(private configService: PastelConfigService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.invoices$ = this.configService.loadProcessedInvoices();
  }

  columnDefs = [
    { field: 'Id', sortable: true, checkboxSelection: true, width: 140 },
    { headerName: 'Customer', field: 'CustomerCode', sortable: true, filter: true, width: 140, resizable: true },
    { headerName: 'OrderNo', field: 'OrderNumber', sortable: true, filter: true, width: 140 },
    {
      field: 'Date', width: 120, cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleDateString() : '';
      }, cellEditor: 'datePicker', editable: true, sortable: true, filter: true
    }
  ];

  defaultColDef: {
    // set every column width
    width: 50,
    // make every column editable
    editable: true,
    // make every column use 'text' filter by default
    filter: 'agTextColumnFilter',
  };

  rowData = [
    {
      "Id": 0,
      "CustomerCode": 244527,
      "OrderNumber": 267328,
      "Date": "2018-09-30T02:20:06"
    },
    {
      "Id": 1,
      "CustomerCode": 825967,
      "OrderNumber": 619703,
      "Date": "2015-11-08T08:58:45"
    },
    {
      "Id": 2,
      "CustomerCode": 437303,
      "OrderNumber": 695057,
      "Date": "2015-12-21T09:31:32"
    },
    {
      "Id": 3,
      "CustomerCode": 528290,
      "OrderNumber": 310090,
      "Date": "2019-09-30T10:06:54"
    },
    {
      "Id": 4,
      "CustomerCode": 327681,
      "OrderNumber": 853422,
      "Date": "2014-01-04T03:17:15"
    },
    {
      "Id": 0,
      "CustomerCode": 244527,
      "OrderNumber": 267328,
      "Date": "2018-09-30T02:20:06"
    },
    {
      "Id": 1,
      "CustomerCode": 825967,
      "OrderNumber": 619703,
      "Date": "2015-11-08T08:58:45"
    },
    {
      "Id": 2,
      "CustomerCode": 437303,
      "OrderNumber": 695057,
      "Date": "2015-12-21T09:31:32"
    },
    {
      "Id": 3,
      "CustomerCode": 528290,
      "OrderNumber": 310090,
      "Date": "2019-09-30T10:06:54"
    },
    {
      "Id": 4,
      "CustomerCode": 327681,
      "OrderNumber": 853422,
      "Date": "2014-01-04T03:17:15"
    }
  ]



  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    alert(JSON.stringify(selectedData));
    selectedData.forEach(i => this.rowData.unshift(this.rowData.find(e => e.Id == i.Id)));
  }
}
