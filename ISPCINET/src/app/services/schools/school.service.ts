// src/app/services/school.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { School } from '../../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  getSchools(): Observable<School[]> {
    // Devuelve una lista hardcodeada de escuelas
    const schools: School[] = [
      { id: 1, name: 'Escuela 1' },
      { id: 2, name: 'Escuela 2' },
      { id: 3, name: 'Escuela 3' },
      // Agrega más escuelas según sea necesario
    ];
    return of(schools);
  }
}
