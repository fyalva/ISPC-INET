import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginError:string="";

  
  loginForm=this.formBuilder.group({
    email:['email@mail.com', [Validators.required, Validators.email] ],
    password:['', Validators.required]
  }

  )

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:LoginService) {

  }

  ngOnInit(): void {
      
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  login(){
    if(this.loginForm.valid){


      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      if (email !== null && email !==undefined && password !==null && password !== undefined ) {


      this.loginService.login(email, password).subscribe({      
         next:(userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      
      })
      
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Revise sus datos, algo salió mal")
    }
  }

  }
}
