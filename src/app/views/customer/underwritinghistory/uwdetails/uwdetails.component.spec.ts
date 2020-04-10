import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UwdetailsComponent } from './uwdetails.component';

describe('UwdetailsComponent', () => {
  let component: UwdetailsComponent;
  let fixture: ComponentFixture<UwdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UwdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UwdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
