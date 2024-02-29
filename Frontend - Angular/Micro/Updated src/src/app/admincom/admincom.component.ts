import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorService } from '../doctor.service';
import { SnackbarService } from '../snackbar.service';
import { AdmindialogComponent } from '../admindialog/admindialog.component';

@Component({
  selector: 'app-admincom',
  templateUrl: './admincom.component.html',
  styleUrls: ['./admincom.component.css']
})
export class AdmincomComponent {

  onSubmit() {
    throw new Error('Method not implemented.');
    }

  
  displayedColumns: string[] = ['empId', 'empName', 'empPhone', 'empLocation','empBg','joiningDate','jobTitle','action'];
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
          alert("Employee details inserted Successfully");       
          this.getEmp();
        }
      },
      error: console.log
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
        alert("Employee details deleted Successfully");
        this.getEmp();
      }
    });
  }

  editEmp(data:any){
    const dialogRef = this._dialog.open(AdmindialogComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          alert("Employee details updated Successfully");
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