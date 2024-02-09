import { Component } from '@angular/core';
import { usermodel } from '../model/usermodel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  hide = true;

  modelobj: usermodel;
  result: string = "";
  // userlist: usermodel[] = [];
  // usermodellist: usermodel[] = [];
  flag: boolean = false;
  myForm: any;
  onSubmit: any;
  // answerlist: any;


  constructor(private service: UserService) {
    this.modelobj = new usermodel();
    //this.getAllDetails();
  }
  changeDiv() {
    this.flag = !this.flag;
  }


  insertNew(data: any) {
    this.modelobj.userName = data.userName;
    this.modelobj.userPassword = data.userPassword;
    this.modelobj.userConfirmPassword = data.userConfirmPassword;
    this.modelobj.userEmail = data.userEmail;
    
    alert(this.result = this.service.insert(this.modelobj));
    // this..reset();
    }

   
  }

    //this.getAllDetails();
    //this.myForm.reset();


//   }
//   update(data: any) {
//     if (data.email == "") {
//       // || data.ftype == "" || data.depart == "" || data.dur ==""){
//       alert("All Fields must be enter");
//     }

//     else {
//       this.modelobj.email = data.email;
//       this.modelobj.key = data.key;
//       alert(this.result = this.service.update(this.modelobj));
//       this.getAllDetails();
//     }
//   }

//   delete(data: any) {
//     if (data.email == "") {
//       //  || data.name == "" || data.depart == "" || data.dur ==""){
//       alert("All Fields must be enter");
//     }
//     else {
//       this.modelobj.email = data.email;
//       this.modelobj.key = data.key;
//       alert(this.result = this.service.delete(this.modelobj));
//       this.getAllDetails();
//     }

//   }


//   getAllDetails() {
//     this.service.getAlldetails().subscribe(ans => this.answerlist = ans);


//   }

// }