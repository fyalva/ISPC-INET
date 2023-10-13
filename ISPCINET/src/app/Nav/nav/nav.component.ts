import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userLoginOn: boolean=false;
  /* Indica que el usuario ingresa a la página Y NO ESTÁ
  LOGUEADO por defecto*/

  constructor() {}

  ngOnInit(): void {
      
  }

}
