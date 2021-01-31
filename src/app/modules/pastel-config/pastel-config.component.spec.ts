import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelConfigComponent } from './pastel-config.component';

describe('PastelConfigComponent', () => {
  let component: PastelConfigComponent;
  let fixture: ComponentFixture<PastelConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastelConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastelConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
