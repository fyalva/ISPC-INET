// src/app/services/school.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escuela } from '../../models/escuela.model';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = '../../../assets/escuelas.json';

  constructor(private http: HttpClient) {}

  getSchools(localityId: number): Observable<Escuela[]> {
    return this.http.get<{escuelas: Escuela[]}>(`${this.apiUrl}/escuelas.json`).pipe(
      map(data => data.escuelas.filter(school => Number(school.id_localidad) === Number(localityId))),
      tap(schools => console.log('Schools:', schools))
    );
  }
}