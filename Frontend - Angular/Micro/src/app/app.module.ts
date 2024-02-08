import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { RouterModule, Routes } from '@angular/router';


import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';

import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { AdmincomComponent } from './admincom/admincom.component';
import { AdmindialogComponent } from './admindialog/admindialog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ValuesComponent } from './values/values.component';
import { ToolsComponent } from './tools/tools.component';

import { ManageuserComponent } from './manageuser/manageuser.component';
import { MessageadminComponent } from './messageadmin/messageadmin.component';
import { MsgcontrolComponent } from './msgcontrol/msgcontrol.component';
import { RegisterviewComponent } from './registerview/registerview.component';



const ROUTES : Routes = [
  {path : 'admincomponent', component:AdmincomComponent},  
  { path: 'admindialog', component: AdmindialogComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'usercomponent', component: UserComponent },
   { path: 'about', component: AboutComponent },
   { path: 'values', component: ValuesComponent },
   { path: 'tools', component: ToolsComponent },
   { path: 'messageadmin', component: MessageadminComponent },
   { path: 'manageuser', component: ManageuserComponent },
   { path: 'messagecontrol', component: MsgcontrolComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registerview', component: RegisterviewComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AdmincomComponent,
    AdmindialogComponent,
    HomeComponent,LoginComponent,RegisterComponent,
    UserComponent,
    AboutComponent,
    ValuesComponent,
    ToolsComponent,
    
    ManageuserComponent,
    MessageadminComponent,
    MsgcontrolComponent,
    RegisterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    MatToolbarModule, MatButtonModule, MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,CdkMenu,CdkMenuItem,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
