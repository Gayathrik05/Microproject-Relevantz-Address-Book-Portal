import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuserComponent } from './manageuser.component';
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
import { AdmindialogComponent } from '../admindialog/admindialog.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { MessageadminComponent } from '../messageadmin/messageadmin.component';
import { MsgcontrolComponent } from '../msgcontrol/msgcontrol.component';
import { RegisterComponent } from '../register/register.component';
import { RegisterviewComponent } from '../registerview/registerview.component';
import { ToolsComponent } from '../tools/tools.component';
import { UserComponent } from '../user/user.component';
import { ValuesComponent } from '../values/values.component';

/* describe('ManageuserComponent', () => {
  let component: ManageuserComponent;
  let fixture: ComponentFixture<ManageuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageuserComponent]
    });
    fixture = TestBed.createComponent(ManageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */


describe('Manage User Component', () => {
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
  //login
  it('Should create the Manage User Component', () => {
    const fixture = TestBed.createComponent(ManageuserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('Manage User component button count check',()=>{
    const fixture = TestBed.createComponent(ManageuserComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");//id selector 
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(8);
});
it('Manage User component Form Input GUI count',()=>{
  const fixture = TestBed.createComponent(ManageuserComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#myform");//id selector 
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(1);

});

});