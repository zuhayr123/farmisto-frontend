import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../services/user-login.service";
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-sign-up-dialog',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.css'],
})

export class SignUpComponent implements OnInit {
    public hide = true;
    public profileForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private loginService: LoginService,
        private toastService: ToastrService,

        public dialogRef: MatDialogRef<SignUpComponent>,
        @Inject(MAT_DIALOG_DATA) public data: boolean,
    ) {
        this.profileForm = this.fb.group({
            name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
            phoneNo: ['', [Validators.required, Validators.pattern('[6789][0-9]{9}')]],
            email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', [Validators.required]],
            address: ['', [Validators.required]]
        });
    }

    onSubmit() {
        if(this.profileForm.valid){
            const userData : any = {
                name : this.profileForm.value.name,
                phoneNumber : this.profileForm.value.phoneNo,
                email : this.profileForm.value.email,
                password : this.profileForm.value.password,
                address : this.profileForm.value.address
            }
            this.loginService.signup(userData).subscribe((result: any) => {
                if(result && result.status=="success"){
                    this.dialogRef.close();
                }
            })
        }else{
            this.toastService.error('Please enter all the fields');
        }
    }

    onHide(){
        this.hide = !this.hide;
        return this.hide;
    }

    ngOnInit() {}

}