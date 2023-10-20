import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Provincia } from '../../models/provincia.model';
import { Localidad } from '../../models/localidad.model';
import { Escuela } from '../../models/escuela.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedProvince: number | null = null;
  selectedLocality: number | null = null;

  provinces: Provincia[] = [];
  localities: Localidad[] = [];
  schools: Escuela[] = [];

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    // Cargar provincias al iniciar el componente
    this.dataService.getProvinces().subscribe(
      (provinces) => {
        console.log('Provinces:', provinces);
        this.provinces = Array.isArray(provinces) ? provinces : [];
      },
      (error) => {
        console.error('Error getting provinces:', error);
      }
    );
  }

  onProvinceChange(): void {
    if (this.selectedProvince) {
      console.log('Selected Province Id:', this.selectedProvince);
  
      // Obtén las localidades para la provincia seleccionada
      this.dataService.getLocalitiesByProvince(this.selectedProvince).subscribe(
        (localities) => {
          console.log('Localities for province:', localities);
          this.localities = localities; // Asigna las localidades obtenidas a this.localities
        },
        (error) => {
          console.error('Error getting localities:', error);
        }
      );
    }
  }
  
  onLocalityChange(): void {
    console.log('onLocalityChange called with:', this.selectedLocality); 
    if (this.selectedLocality) {
      this.dataService.getSchoolsByLocality(this.selectedLocality).subscribe(schools => {
        this.schools = schools;
      });
    } else {
      this.schools = [];
    }
  }
}