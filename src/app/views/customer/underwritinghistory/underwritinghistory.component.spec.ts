import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwritinghistoryComponent } from './underwritinghistory.component';

describe('UnderwritinghistoryComponent', () => {
  let component: UnderwritinghistoryComponent;
  let fixture: ComponentFixture<UnderwritinghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderwritinghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwritinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
