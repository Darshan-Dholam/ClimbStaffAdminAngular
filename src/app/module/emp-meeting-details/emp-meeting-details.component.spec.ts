import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMeetingDetailsComponent } from './emp-meeting-details.component';

describe('EmpMeetingDetailsComponent', () => {
  let component: EmpMeetingDetailsComponent;
  let fixture: ComponentFixture<EmpMeetingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMeetingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
