import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincomComponent } from './admincom/admincom.component';
import { AdmindialogComponent } from './admindialog/admindialog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ValuesComponent } from './values/values.component';
import { ToolsComponent } from './tools/tools.component';
import { MessageadminComponent } from './messageadmin/messageadmin.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { MsgcontrolComponent } from './msgcontrol/msgcontrol.component';
import { RegisterviewComponent } from './registerview/registerview.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




