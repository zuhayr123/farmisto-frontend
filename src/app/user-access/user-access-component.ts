import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { LoginService } from '../services/user-login.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit, AfterViewInit  {
  
  displayedColumns: string[] = ['id', 'name', 'email', 'phoneNumber', 'access', 'update'];

  constructor(
    private loginService: LoginService,
    private authenticationService : AuthenticationService,
    public dialog: MatDialog) 
  {
  }

  public checkAccess(){
    if(this.authenticationService.currentUserValue.access=='SUPERADMIN' ||  this.authenticationService.currentUserValue.access=='ADMIN'){
      return true
    }else{
      return false
    }
  }
  
  
  ngOnInit() {  
    this.getUsers();  
  }

  dataSource = new MatTableDataSource<any>();

  @ViewChild('Paginator', { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getUsers(){
    this.loginService.getAllUsers().subscribe((result) => {
      if(result && result.status == 'success'){
        result.data = result.data.map((data: any, index: any) => {
          data.index = index + 1;
          return data;
      })
      this.dataSource.data = result.data;
      }
    })
  }

  addUser(){
    const dialogRef = this.dialog.open(SignUpComponent, {
      data : true
    });
    dialogRef.afterClosed().subscribe(() => this.getUsers());
  }

  openAccessDialog(user : any){
    const dialogRef = this.dialog.open(UpdateAccessDialog, {
      data: user,
    });
    dialogRef.afterClosed().subscribe(() => this.getUsers());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

@Component({
  selector: 'update-access-dialog',
  templateUrl: 'update-access-dialog.html',
})
export class UpdateAccessDialog {

  public accessType = ['NONE', 'SUPERADMIN', 'ADMIN', 'CORPORATE' ]
  
  constructor(
    public dialogRef: MatDialogRef<UpdateAccessDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loginService: LoginService,
    private toastService: ToastrService
    ) {}
    
  public selected: string = this.data.access;

  updateAccess() {
    this.loginService.updateUserAccess(this.data, this.selected).subscribe((result) => {
      if(result && result.status=='success'){
        this.toastService.success('Access updated for the user.');
      }
    })
  }
}