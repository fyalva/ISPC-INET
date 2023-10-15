// src/app/Pages/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';
import { DataService } from 'src/app/services/data/data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLoginOn: boolean = false;
  userData?: User;
  selectedProvince: string = '';
  selectedCity: string = '';
  provinces: any[] = [];
  cities: any[] = [];

  constructor(
    private loginService: LoginService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData = userData;
      }
    });

    // Cargar datos de provincias y ciudades
    this.dataService.getProvincesAndCities().subscribe(data => {
      this.provinces = data.provinces;
    });
  }

  onProvinceChange(): void {
    // Filtrar ciudades según la provincia seleccionada
    const selectedProvinceData = this.provinces.find(p => p.id === this.selectedProvince);
    this.cities = selectedProvinceData ? selectedProvinceData.cities : [];
  }
}
