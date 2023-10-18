import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';
import { DataService } from 'src/app/services/data/data.service';
import { Province, Locality, School } from 'src/app/models/province';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLoginOn: boolean = false;
  userData?: User;
  selectedProvince: number = 0;
  selectedLocality: number = 0;
  provinces: Province[] = [];
  localities: Locality[] = [];
  schools: School[] = [];

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

    // Cargar datos de provincias
    this.dataService.getProvinces().subscribe(provinces => {
      this.provinces = provinces;
    });
  }

  onProvinceChange(): void {
    // Filtrar localidades según la provincia seleccionada
    if (this.selectedProvince > 0) {
      this.dataService.getLocalitiesByProvince(this.selectedProvince).subscribe(localities => {
        this.localities = localities;
      });
    } else {
      this.localities = [];
    }
  }

  onLocalityChange(): void {
    // Mostrar escuelas según la localidad seleccionada
    if (this.selectedLocality > 0) {
      this.dataService.getSchoolsByLocality(this.selectedLocality).subscribe(schools => {
        this.schools = schools;
      });
    } else {
      this.schools = [];
    }
  }
}
