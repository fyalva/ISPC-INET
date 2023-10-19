import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/auth/usuario.service';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';


function validarMaximo200Palabras(control: AbstractControl): ValidationErrors | null {
  const texto = control.value as string;
  const palabras = texto.split(' ');

  if (palabras.length > 200) {
    return { maximo200Palabras: true };
  }

  return null;
}




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  form:FormGroup;
  usuario: Usuario = new Usuario();

  constructor(private authService:AuthService, private formBuilder: FormBuilder, 
    private usuarioService: UsuarioService, private router:Router) { 

      this.form= this.formBuilder.group(
        {
            firstName:['', [Validators.required]],
            lastName:['', [Validators.required]],
            username:['', [Validators.required]],
            email:['', [Validators.required]],
            password:['', [Validators.required]]
        }
      )

      

      
  
  }

  ngOnInit(): void {
      
  }


 onEnviar (event:Event, usuario:Usuario): void {
    event.preventDefault;
    if (this.form.valid)
    {
      console.log("enviando al servidor");
      console.log(usuario);
      this.usuarioService.onCrearUsuario(usuario).subscribe(
        data => {
          console.log(data.id);
          if (data.id>0)
          {
            alert("El registro ha sido creado satisfactoriamente, A continuación inicie sesión");
            this.router.navigate(['/login'])
          }
        })
    }
    else 
    {this.form.markAllAsTouched();
    }
 };

 get Password()
 {
  return this.form.get("password");
 }

 get Mail()
 {
  return this.form.get("mail");
 }

 get FirstName()
 {
  return this.form.get("firstName");
 }

 get LastName()
 {
  return this.form.get("lastName");
 }

 get Username()
 {
  return this.form.get("username");
 }

 get MailValid()
 {
  return this.Mail?.touched && !this.Mail?.valid;
 } 

 get FirstNameValid()
 {
  return this.FirstName?.touched && !this.FirstName?.valid;
 } 

 get LastNameValid()
 {
  return this.LastName?.touched && !this.LastName?.valid;
 } 

 get PasswordValid()
 {
  return this.Password?.touched && !this.Password?.valid;
 } 

 get UsernameValid()
 {
  return this.Username?.touched && !this.Username?.valid;
 } 

}