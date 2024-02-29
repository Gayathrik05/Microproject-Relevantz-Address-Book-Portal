import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageadminComponent } from './messageadmin.component';

describe('MessageadminComponent', () => {
  let component: MessageadminComponent;
  let fixture: ComponentFixture<MessageadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageadminComponent]
    });
    fixture = TestBed.createComponent(MessageadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
