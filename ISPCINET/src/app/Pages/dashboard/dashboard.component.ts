import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Provincia } from '../../models/provincia.model';
import { Localidad } from '../../models/localidad.model';
import { Establecimiento} from '../../models/establecimiento.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedProvince: number | null = null;
  selectedLocality: number | null = null;
  selectedLocalityName: string | null = null;
  showSchools = false;

  provinces: Provincia[] = [];
  localities: Localidad[] = [];
  schools: Establecimiento[] = [];
 

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
  
      
      this.dataService.getLocalitiesByProvince(this.selectedProvince).subscribe(
        (localities) => {
          console.log('Localities for province:', localities);
          this.localities = localities; 
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
      let selectedLocality = this.localities.find(loc => loc.id_localidad === this.selectedLocality);
      this.selectedLocalityName = selectedLocality ? selectedLocality.nombre : null;
      this.dataService.getSchoolsByLocality(this.selectedLocality).subscribe(schools => {
        this.schools = schools;
      });
    } else {
      this.schools = [];
    }
  }

  onSearch(): void {
    console.log('onSearch called with:', this.selectedLocality); 
    if (this.selectedLocality) {
      this.dataService.getSchoolsByLocality(this.selectedLocality).subscribe(schools => {
        this.schools = schools;
      });
    } else {
      this.schools = [];
    }
  }


  onShowSchools() {
    this.showSchools = true;
  }
}