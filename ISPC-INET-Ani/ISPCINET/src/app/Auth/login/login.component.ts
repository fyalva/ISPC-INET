import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/services/auth/user';
import { Component, OnInit, OnDestroy } from '@angular/core'; // Importa OnDestroy


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit, OnDestroy {
  loginError: string = '';
  private destroy$: Subject<void> = new Subject<void>();

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      if (email !== null && email !== undefined && password !== null && password !== undefined) {
        this.loginService
        .login(email, password)
        .pipe(takeUntil(this.destroy$)) // Aplica takeUntil para cancelar la suscripción en ngOnDestroy
        .subscribe({
          next: (userData: User) => {
            console.log(userData);
            // Resto de la lógica de inicio de sesión
          },
          error: (errorData: any) => {
            console.error(errorData);
            this.loginError = 'Hubo un error en el inicio de sesión. Revise sus credenciales.';
          },
          complete: () => {
            console.info('Inicio de sesión completo');
            this.router.navigateByUrl('/inicio');
            this.loginForm.reset();
          }
        });
    }
      } else {
        this.loginForm.markAllAsTouched();
        alert('Revise sus datos, algo salió mal');
      }

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
