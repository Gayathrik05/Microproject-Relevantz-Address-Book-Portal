import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindialogComponent } from './admindialog.component';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from '../about/about.component';
import { AdmincomComponent } from '../admincom/admincom.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ManageuserComponent } from '../manageuser/manageuser.component';
import { MessageadminComponent } from '../messageadmin/messageadmin.component';
import { MsgcontrolComponent } from '../msgcontrol/msgcontrol.component';
import { RegisterComponent } from '../register/register.component';
import { RegisterviewComponent } from '../registerview/registerview.component';
import { ToolsComponent } from '../tools/tools.component';
import { UserComponent } from '../user/user.component';
import { ValuesComponent } from '../values/values.component';
/* 
describe('AdmindialogComponent', () => {
  let component: AdmindialogComponent;
  let fixture: ComponentFixture<AdmindialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindialogComponent]
    });
    fixture = TestBed.createComponent(AdmindialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */


describe('Admin Dialog Component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,AdmincomComponent,AdmindialogComponent,HomeComponent,LoginComponent,RegisterComponent,
      UserComponent,AboutComponent,ValuesComponent,ToolsComponent,ManageuserComponent,MessageadminComponent,
      MsgcontrolComponent,RegisterviewComponent     ],
    imports: [
      BrowserModule,AppRoutingModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,RouterModule,RouterTestingModule,
      MatToolbarModule, MatButtonModule, MatIconModule,ReactiveFormsModule,HttpClientModule,MatDialogModule,MatFormFieldModule,
      MatInputModule,MatSelectModule,MatTableModule,MatSnackBarModule,MatPaginatorModule,CdkMenu,CdkMenuItem,
      MatFormFieldModule, MatInputModule, MatDatepickerModule,MatNativeDateModule
    ],
    providers: [        
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }       
  ]
  }));
  //Register
  it('Should create the Admin Dialog Component', () => {
    const fixture = TestBed.createComponent(AdmindialogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('Admin Dialog component button count check',()=>{
    const fixture = TestBed.createComponent(AdmindialogComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");//id selector 
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
});
it('Admin Dialog component Form Input GUI count',()=>{
  const fixture = TestBed.createComponent(AdmindialogComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#EmployeeForm");//id selector 
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(7);

});
it('Form validation Testing for false', () => {
  const fixture = TestBed.createComponent(AdmindialogComponent);
  const Employee = fixture.componentInstance;
  Employee.EmployeeForm.controls?.['empId'].setValue(201);
  Employee.EmployeeForm.controls?.['empName'].setValue("Esha");
  Employee.EmployeeForm.controls?.['empPhone'].setValue("5555555555");
  Employee.EmployeeForm.controls?.['empLocation'].setValue("esha@gmail.com");
  Employee.EmployeeForm.controls?.['empBg'].setValue("O");
  Employee.EmployeeForm.controls?.['joiningDate'].setValue("12.12.12");
  Employee.EmployeeForm.controls?.['jobTitle'].setValue("Kodai");      
  expect(Employee.EmployeeForm.valid).toBeFalsy();
});



});

