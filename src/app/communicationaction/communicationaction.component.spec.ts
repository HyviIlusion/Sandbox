import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationactionComponent } from './communicationaction.component';

describe('CommunicationactionComponent', () => {
  let component: CommunicationactionComponent;
  let fixture: ComponentFixture<CommunicationactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
