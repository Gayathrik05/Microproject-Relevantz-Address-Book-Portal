import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgcontrolComponent } from './msgcontrol.component';

describe('MsgcontrolComponent', () => {
  let component: MsgcontrolComponent;
  let fixture: ComponentFixture<MsgcontrolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgcontrolComponent]
    });
    fixture = TestBed.createComponent(MsgcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
