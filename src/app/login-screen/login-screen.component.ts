import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/user-login.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  hide = true;
  public form!: FormGroup;

  constructor(private router : Router,
    private loginService : LoginService,
    private toastService : ToastrService,
    private authenticationService : AuthenticationService,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        password: ['', [Validators.required]],
      })
     }

  ngOnInit(): void {
    
  }

  navigateToContentControlPortal(){
    this.router.navigateByUrl("ccp/home");
  }

  login(){
    if(this.form.valid){
      const data : any = {
        email : this.form.value.email,
        password : this.form.value.password,
      }
      this.loginService.login(data).subscribe((result: any) => {
        if(result && result.status=='success'){
          console.log('111');
          this.authenticationService.loginAfterVerification(result.token);
          this.router.navigate(['/ccp/home']);
        }else{
          this.toastService.error('Please enter correct details.');
        }
      });
    }else{
      this.toastService.error('Please enter all the fields.');
    }
  }

  signup() {
    this.router.navigateByUrl("signup");
  }

}
