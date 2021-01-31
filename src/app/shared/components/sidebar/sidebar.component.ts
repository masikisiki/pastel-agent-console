import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  navLinks = [
    'SDK','OrderApi','Invoice','PriceList','Product', 'Customer'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
