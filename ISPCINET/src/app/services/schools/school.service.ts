// src/app/services/school.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Establecimiento } from '../../models/establecimiento.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  getSchools(): Observable<Establecimiento[]> {
  
    const schools: Establecimiento[] = [
    
 
    ];
    return of(schools);
  }
}
