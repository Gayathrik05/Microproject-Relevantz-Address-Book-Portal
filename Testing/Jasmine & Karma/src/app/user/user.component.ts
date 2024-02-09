import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorService } from '../doctor.service';
import { SnackbarService } from '../snackbar.service';
import { MessageadminComponent } from '../messageadmin/messageadmin.component';
import { AdmincomComponent } from '../admincom/admincom.component';
import { AdmindialogComponent } from '../admindialog/admindialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  onSubmit() {
    }

  
  displayedColumns: string[] = ['empId', 'empName', 'empPhone', 'empLocation','empBg','joiningDate','jobTitle'];
  dataSource!: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;


  constructor(private _mov:DoctorService, private _dialog:MatDialog, private _snackbar: SnackbarService){}

  ngOnInit(): void {
      this.getEmp(); //To get the values
  }

  openDialog(){
    const dialogRef = this._dialog.open(AdmindialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEmp();
        }
      },
      error: console.log
    });
  }
  openMessageAdmin() {
    this._dialog.open(MessageadminComponent, {
     
    }).afterClosed().subscribe(val => {
      if(val === 'Save'){
        // this.getAllProduct();
      }
    });
  }
  getEmp(){
    this._mov.viewEmployee().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }

  deleteEmployee(empId:number){
    this._mov.deleteEmployee(empId).subscribe({
      next: (val) => {
        this._snackbar.openSnackBar("Record Deleted", "Done"); //Delete Doctor
        this.getEmp();
      }
    });
  }

  editEmp(data:any){
    const dialogRef = this._dialog.open(UserComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEmp();
        }
      },
      error: console.log
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}