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
            nombre:['', [Validators.required]],
            apellido:['', [Validators.required]],
            provincia:['', [Validators.required]],
            fechaNac:['', [Validators.required]],
            celular:['', [Validators.required]],
            mail:['', [Validators.required]],
            password:['', [Validators.required]],
            profesion:['', [Validators.required]],
            about: ['', [Validators.required, validarMaximo200Palabras]]
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

 get Password1()
 {
  return this.form.get("password1");
 }

 get Password2() {
  return this.form.get("password2");
 }

 get Mail()
 {
  return this.form.get("mail");
 }

 get Nombre()
 {
  return this.form.get("nombre");
 }

 get Apellido()
 {
  return this.form.get("apellido");
 }

 get FechaNac()
 {
  return this.form.get("fechaNac");
 }

 get Provincia()
 {
  return this.form.get("provincia");
 }

 get Profesion()
 {
  return this.form.get("profesion");
 }

 get About()
 {
  return this.form.get("about");
 }

 get MailValid()
 {
  return this.Mail?.touched && !this.Mail?.valid;
 } 

 get NombreValid()
 {
  return this.Nombre?.touched && !this.Nombre?.valid;
 } 

 get ApellidoValid()
 {
  return this.Apellido?.touched && !this.Apellido?.valid;
 } 

 get Password1Valid()
 {
  return this.Password1?.touched && !this.Password1?.valid;
 } 

 get Password2Valid()
 {
  return this.Password2?.touched && !this.Password2?.valid;
 } 

 get ProfesionValid()
 {
  return this.Profesion?.touched && !this.Profesion?.valid;
 } 

 get FechaNacValid()
 {
  return this.FechaNac?.touched && !this.FechaNac?.valid;
 } 

 get ProvinciaValid()
 {
  return this.Provincia?.touched && !this.Provincia?.valid;
 } 

 get AboutValid()
 {
  return this.About?.touched && !this.About?.valid;
 } 


 

}