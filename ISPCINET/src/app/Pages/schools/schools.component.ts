// src/app/Pages/schools/schools.component.ts
import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/schools/school.service';
import { School } from 'src/app/models/school.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools: School[] = [];

  constructor(private schoolService: SchoolService, private location: Location) {}

  ngOnInit(): void {
    this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
