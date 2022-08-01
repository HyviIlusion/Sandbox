import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationactionComponent } from './creationaction.component';

describe('CreationactionComponent', () => {
  let component: CreationactionComponent;
  let fixture: ComponentFixture<CreationactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
