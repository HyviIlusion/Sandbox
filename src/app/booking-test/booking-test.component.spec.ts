import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTestComponent } from './booking-test.component';

describe('BookingTestComponent', () => {
  let component: BookingTestComponent;
  let fixture: ComponentFixture<BookingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
