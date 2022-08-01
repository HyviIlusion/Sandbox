import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderactionComponent } from './headeraction.component';

describe('HeaderactionComponent', () => {
  let component: HeaderactionComponent;
  let fixture: ComponentFixture<HeaderactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
