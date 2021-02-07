import { PastelConfigService } from 'src/app/services/pastel-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  navLinks = [
    'SDK', 'OrderApi', 'Invoice', 'PriceList', 'Product', 'Customer'
  ];
  constructor(private pService: PastelConfigService) { }

  ngOnInit(): void {
  }

  resetJobs() {
    this.pService.resetJobs().subscribe(() => this.pService.success('Job reset completed!'))
  }
}
