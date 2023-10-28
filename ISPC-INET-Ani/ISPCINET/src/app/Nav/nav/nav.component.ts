import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit , OnDestroy {

  userLoginOn: boolean=false;
  /* Indica que el usuario ingresa a la página Y NO ESTÁ
  LOGUEADO por defecto*/

  constructor(private loginService:LoginService) {}

  ngOnDestroy(): void {
      this.loginService.currentUserLoginOn.unsubscribe()
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )   
  }
}
