import { PastelConfigService } from 'src/app/services/pastel-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  navLinks = [
    'SDK', 'OrderApi','SupplierInvoice', 'Invoice', 'PriceList', 'Product', 'Customer','ModitorMicrosInvoice','MagicCloud'
  ];
  constructor(private pService: PastelConfigService) { }

  ngOnInit(): void {
  }

  resetJobs() {
    this.pService.resetJobs().subscribe(() => this.pService.success('Job reset completed!'))
  }

  resetMicrosJobs() {
    this.pService.resetMicrosJobs().subscribe(() => this.pService.success('Micros Job reset completed!'))
  }
}
