import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorService } from '../doctor.service';
import { SnackbarService } from '../snackbar.service';
import { AdmincomComponent } from '../admincom/admincom.component';

@Component({
  selector: 'app-admindialog',
  templateUrl: './admindialog.component.html',
  styleUrls: ['./admindialog.component.css']
})
export class AdmindialogComponent {

  EmployeeForm:FormGroup;
  
  constructor(private _mov:DoctorService, private _dialogRef:MatDialogRef<AdmincomComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any, private _snackbar: SnackbarService){

      this.EmployeeForm = new FormGroup ({ 
              empId: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
              empName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),  
              empPhone: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
              empLocation: new FormControl('',[Validators.required, Validators.pattern ('[a-zA-Z][a-zA-Z\\s]+')]),
              empBg: new FormControl('',[Validators.required, Validators.pattern ('[a-zA-Z][a-zA-Z\\s]+')]),
              joiningDate: new FormControl('',[Validators.required]),
              jobTitle: new FormControl('',[Validators.required, Validators.pattern ('[a-zA-Z][a-zA-Z\\s]+')]),
              });
  }
  ngOnInit(): void {
      this.EmployeeForm.patchValue(this.data); //To view the existing data when click update
  }

  onSubmit(){
    
    if(this.EmployeeForm.valid){
      if(this.data=='Update'){// Update Doctor
        this._mov.updateEmployee(this.EmployeeForm.value).subscribe({
          next:(val) => {
            this._snackbar.openSnackBar("Employee details Updated","Done")
            this._dialogRef.close(true);
          }
        })
      }else{// Add Doctor
        this._mov.insertEmployee(this.EmployeeForm.value).subscribe({
          
          next: (_val) => {
            alert("User Registerd Successfully");
            // this._snackbar.openSnackBar("Employee details Added","Done")
            this._dialogRef.close(true);
          },
          error:()=>{
            alert("Can't be insert un registered person details");
          }
        });
      }
    
    }
  }
}
