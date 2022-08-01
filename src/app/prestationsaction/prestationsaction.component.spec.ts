import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsactionComponent } from './prestationsaction.component';

describe('PrestationsactionComponent', () => {
  let component: PrestationsactionComponent;
  let fixture: ComponentFixture<PrestationsactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationsactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationsactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
