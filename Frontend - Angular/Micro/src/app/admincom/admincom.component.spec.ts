import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincomComponent } from './admincom.component';

describe('AdmincomComponent', () => {
  let component: AdmincomComponent;
  let fixture: ComponentFixture<AdmincomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincomComponent]
    });
    fixture = TestBed.createComponent(AdmincomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
