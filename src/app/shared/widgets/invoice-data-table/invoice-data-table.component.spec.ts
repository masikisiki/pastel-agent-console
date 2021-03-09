import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDataTableComponent } from './invoice-data-table.component';

describe('InvoiceDataTableComponent', () => {
  let component: InvoiceDataTableComponent;
  let fixture: ComponentFixture<InvoiceDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
