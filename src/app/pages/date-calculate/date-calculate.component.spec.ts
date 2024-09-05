import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCalculateComponent } from './date-calculate.component';

describe('DateCalculateComponent', () => {
  let component: DateCalculateComponent;
  let fixture: ComponentFixture<DateCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCalculateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
