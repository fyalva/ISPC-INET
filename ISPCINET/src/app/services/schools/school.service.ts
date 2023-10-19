// src/app/services/school.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escuela } from '../../models/escuela.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = '../../../assets/escuelas.json';

  constructor(private http: HttpClient) {}

  getSchools(): Observable<Escuela[]> {
    return this.http.get<Escuela[]>(this.apiUrl);
  }
}
