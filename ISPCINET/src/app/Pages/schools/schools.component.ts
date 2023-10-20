// schools.component.ts

import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/schools/school.service';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
})
export class SchoolsComponent implements OnInit {
  schools: any[] = []; // Ajusta el tipo según la estructura real de tus datos

  constructor(
    private schoolService: SchoolService,
    private location: Location,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.getSelectedLocality().subscribe({
      next: (selectedLocality: number | null) => {
        if (selectedLocality !== null) {
          this.schoolService.getSchools(selectedLocality).subscribe({
            next: (schools) => {
              this.schools = schools;
            },
            error: (error) => {
              console.error('Error getting schools:', error);
            },
          });
        }
      },
      error: (error) => {
        console.error('Error getting selected locality:', error);
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
