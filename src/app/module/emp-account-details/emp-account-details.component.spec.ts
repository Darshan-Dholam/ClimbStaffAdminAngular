import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAccountDetailsComponent } from './emp-account-details.component';

describe('EmpAccountDetailsComponent', () => {
  let component: EmpAccountDetailsComponent;
  let fixture: ComponentFixture<EmpAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
