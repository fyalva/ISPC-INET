import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { NavComponent } from './Nav/nav/nav.component'; 
import { from } from 'rxjs';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { RegistroComponent } from './Auth/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    HeaderTopComponent,
    NavComponent,
    CarouselComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
