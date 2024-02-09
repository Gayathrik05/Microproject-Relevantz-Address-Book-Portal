import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
import { AboutComponent } from './about/about.component';
import { AdmincomComponent } from './admincom/admincom.component';
import { AdmindialogComponent } from './admindialog/admindialog.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { MessageadminComponent } from './messageadmin/messageadmin.component';
import { MsgcontrolComponent } from './msgcontrol/msgcontrol.component';
import { RegisterComponent } from './register/register.component';
import { RegisterviewComponent } from './registerview/registerview.component';
import { ToolsComponent } from './tools/tools.component';
import { UserComponent } from './user/user.component';
import { ValuesComponent } from './values/values.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    
    declarations: [
      AppComponent,AdmincomComponent,AdmindialogComponent,HomeComponent,LoginComponent,RegisterComponent,
      UserComponent,AboutComponent,ValuesComponent,ToolsComponent,ManageuserComponent,MessageadminComponent,
      MsgcontrolComponent,RegisterviewComponent
     ],
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
//appcomponent
  it('1. Should create App Component ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'Micro'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Micro');
  });
   
  //homecomponent
  it('2. Should create the Home Component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //aboutcomponent
  it('3. Should create the About Component', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
   //tools
   it('4. Should create the Tools Component', () => {
    const fixture = TestBed.createComponent(ToolsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

   //values
   it('5. Should create the Values Component', () => {
    const fixture = TestBed.createComponent(ValuesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //logincomponent
  it('6. Should create the Login Component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

 //register
 it('7. Should create the Register Component', () => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

  //admincomponent
  it('8. Should create the Admin Component', () => {
    const fixture = TestBed.createComponent(AdmincomComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //admindialogcomponent
  it('9. Should create the Admin Dialog Component', () => {
    const fixture = TestBed.createComponent(AdmindialogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
   
  //manageuser
  it('10. Should create the Manage User Component', () => {
    const fixture = TestBed.createComponent(ManageuserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

   //msgcontrol
   it('11. Should create the Message Control Component', () => {
    const fixture = TestBed.createComponent(MsgcontrolComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

 //user
 it('12. Should create the User Component', () => {
  const fixture = TestBed.createComponent(UserComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

  //messageadmin
  it('13. Should create the Message Admin Component', () => {
    const fixture = TestBed.createComponent(MessageadminComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
 
 
});

//2nd test
describe('AppComponent', () => {
//appcomponent
it('1. Should create App Component ', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});
it(`should have as title 'Micro'`, () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Micro');
});
it('App Component Button Test', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector(".example-button-row");//class selector 
  const buttonElements = formElement.querySelectorAll("button");
  expect(buttonElements.length).toEqual(2);
});

});
