import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdmincomComponent } from '../admincom/admincom.component';

import { SnackbarService } from '../snackbar.service';
import { MsgservService } from '../msgserv.service';

@Component({
  selector: 'app-messageadmin',
  templateUrl: './messageadmin.component.html',
  styleUrls: ['./messageadmin.component.css']
})
export class MessageadminComponent{

  MessageForm:FormGroup;
  
  constructor(private _mov:MsgservService, private _dialogRef:MatDialogRef<MessageadminComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any, private _snackbar: SnackbarService){

      this.MessageForm = new FormGroup ({ 
              employeeId: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
              employeeName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),  
              employeeEmail: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9]+@gmail.com')]),
              employeeMessage: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),  
              
              });
  }
  ngOnInit(): void {
      this.MessageForm.patchValue(this.data); //To view the existing data when click update
  }

  onSubmit(){
    
    if(this.MessageForm.valid){
      if(this.data=='Update'){// Update Doctor
        this._mov.updateEmployee(this.MessageForm.value).subscribe({
          next:(val) => {
            this._snackbar.openSnackBar("Employee details Updated","Done")
            this._dialogRef.close(true);
          }
        })
      }else{// Add Doctor
        this._mov.insertEmployee(this.MessageForm.value).subscribe({
          next: (_val) => {
            alert("Message Sent Successfully");//this._snackbar.openSnackBar("Message Sent","Done")
            this._dialogRef.close(true);
          }
        });
      }
    
    }
  }
}
