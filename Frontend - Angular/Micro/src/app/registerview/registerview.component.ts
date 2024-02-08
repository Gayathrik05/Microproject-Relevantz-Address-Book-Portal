import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarService } from '../snackbar.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.css']
})
export class RegisterviewComponent {
  

  onSubmit() {
    throw new Error('Method not implemented.');
    }

  
  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeEmail', 'employeeMessage','action'];
  dataSource!: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;


  constructor(private _mov:UserService, private _dialog:MatDialog, private _snackbar: SnackbarService){}

  ngOnInit(): void {
      this.getEmp(); //To get the values
  }

  // openDialog(){
  //   const dialogRef = this._dialog.open(MessageadminComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if(val){
  //         this.getEmp();
  //       }
  //     },
  //     error: console.log
  //   });
  // }
 
  getEmp(){
    this._mov.getAlldetails().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }

  // deleteEmployee(userId:number){
  //   this._mov.delete(userId).subscribe({
  //     next: (val) => {
  //       this._snackbar.openSnackBar("Record Deleted", "Done"); //Delete Doctor
  //       this.getEmp();
  //     }
  //   });
  // }

  // editEmp(data:any){
  //   const dialogRef = this._dialog.open(MessageadminComponent,{
  //     data,
  //   });
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if(val){
  //         this.getEmp();
  //       }
  //     },
  //     error: console.log
  //   });
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}