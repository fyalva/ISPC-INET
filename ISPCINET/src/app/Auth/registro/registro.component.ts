import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/auth/usuario.service';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  form: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private formBuilder: FormBuilder,
    private usuarioService: UsuarioService, private router: Router) {

    this.form = this.formBuilder.group(
      {
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {

  }

  onEnviar(event: Event, usuario: Usuario): void {
    event.preventDefault;
    if (this.form.valid) {
      console.log("enviando al servidor");
      console.log(usuario);
      this.usuarioService.onCrearUsuario(usuario).subscribe(
        data => {
          console.log(data.id);
          if (data.id > 0) {
            alert("El registro ha sido creado satisfactoriamente, A continuación inicie sesión");
            this.router.navigate(['/login']);
          }
        })
    } else {
      this.form.markAllAsTouched();
    }
  }

  get password() {
    return this.form.get("password");
  }

  get email() {
    return this.form.get("email");
  }

  get first_name() {
    return this.form.get("first_name");
  }

  get last_name() {
    return this.form.get("last_name");
  }

  get username() {
    return this.form.get("username");
  }

  get emailValid() {
    return this.email?.touched && !this.email?.valid;
  }

  get first_nameValid() {
    return this.first_name?.touched && !this.first_name?.valid;
  }

  get last_nameValid() {
    return this.last_name?.touched && !this.last_name?.valid;
  }

  get passwordValid() {
    return this.password?.touched && !this.password?.valid;
  }

  get usernameValid() {
    return this.username?.touched && !this.username?.valid;
  }
}
