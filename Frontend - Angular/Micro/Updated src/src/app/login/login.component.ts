import { Component, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';
import { usermodel } from '../model/usermodel';
import { Router } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
   
   hide = true; 
  
  modelobj: usermodel;
  result:string="";
  userlist:usermodel[]=[];
  usermodellist:usermodel[]=[];
  flag:boolean=false;
answerlist: any;
  
  
  constructor(private service : UserService,private router :Router)
  {
    this.modelobj=new usermodel();
  }
   changeDiv(){
     this.flag=!this.flag;
   }


  loginUser(data:any)
  {
    this.modelobj.userEmail=data.userEmail;
    this.modelobj.userPassword=data.userPassword;

    this.service.loginUser(this.modelobj).subscribe(
      (resultdata:any)=> {
        console.log(resultdata)
        if(resultdata.message=="Admin Success"){
          alert("Login Successfully");
          this.router.navigate(["/admincomponent"]);
        }
        else if(resultdata.message=="User Success"){
          alert("Login Successfully");
          this.router.navigate(['/usercomponent']);
        }
        else{
          alert("Invalid User");
        }
      });
  }}



//   }
//   update(data:any)
//   {
//     if(data.email == "" ){
//     // || data.ftype == "" || data.depart == "" || data.dur ==""){
//       alert("All Fields must be enter");
//     }
    
//     else{
//       this.modelobj.userEmail=data.userEmail;
//     this.modelobj.userPassword=data.userPassword;
//     alert(this.result=this.service.update(this.modelobj));    
//     this.getAllDetails();
//   }
//   }

//   delete(data:any)
//   {
//     if(data.email == ""){
//       //  || data.name == "" || data.depart == "" || data.dur ==""){
//       alert("All Fields must be enter");
//     }
//     else{
//       this.modelobj.userEmail=data.userEmail;
//       this.modelobj.userPassword=data.userPassword;
//       alert(this.result=this.service.delete(this.modelobj));    
//     this.getAllDetails();
//   }

//   }

  
//   getAllDetails()
//   {
//     this.service.getAlldetails().subscribe( ans=>this.answerlist=ans );


//   }

// }

// hide = false;
//   UserForm:FormGroup;
  
//   constructor(private userobj:UserService, private dialogRefObj:MatDialogRef<LoginComponent>,
//     @Inject (MAT_DIALOG_DATA) public data:any, private snackbarObj: SnackbarService){

//     this.UserForm = new FormGroup ({ 
//       email: new FormControl('',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),  
//       key: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%^&*]{6,16}$')]),  
      
//           });
//   }
//   ngOnInit(): void {
//       this.UserForm.patchValue(this.data); //To view the existing data when click update
//   }

//   onSubmit(){
    
//     if(this.UserForm.valid){
//       if(this.data){// Update User
//         this.userobj.updateUsers(this.UserForm.value).subscribe({
//           next:(val) => {
//             this.snackbarObj.openSnackBar("User details Updated","Done")
//             this.dialogRefObj.close(true);
//           }
//         })
//       }else{// Add User
//         this.userobj.addUsers(this.UserForm.value).subscribe({
//           next: (_val) => {
//             this.snackbarObj.openSnackBar("User Added","Done")
//             this.dialogRefObj.close(true);
//           }
//         });
//       }
    
//     }
//   }
// }
