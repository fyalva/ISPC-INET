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
            firstname: ['', [Validators.required]],
            lastaname: ['', [Validators.required]],
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

  get firstname() {
    return this.form.get("firstname");
  }

  get lastname() {
    return this.form.get("lastname");
  }

  get username() {
    return this.form.get("username");
  }

  get emailValid() {
    return this.email?.touched && !this.email?.valid;
  } 

  get firstnameValid() {
    return this.firstname?.touched && !this.firstname?.valid;
  } 

  get lastnameValid() {
    return this.lastname?.touched && !this.lastname?.valid;
  } 

  get passwordValid() {
    return this.password?.touched && !this.password?.valid;
  } 

  get usernameValid() {
    return this.username?.touched && !this.username?.valid;
  } 
}