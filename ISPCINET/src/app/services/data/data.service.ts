  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Provincia } from '../../models/provincia.model';
  import { Localidad } from '../../models/localidad.model';
  import { Escuela } from '../../models/escuela.model';
  import { map } from 'rxjs/operators';

  @Injectable({
    providedIn: 'root',
  })
  export class DataService {
    private apiUrl = '../../../assets'; 

    constructor(private http: HttpClient) {}

    getProvinces(): Observable<Provincia[]> {
      const url = `${this.apiUrl}/provincias.json`;
      console.log('Ruta de provincias:', url);
      return this.http.get<{provincias: Provincia[]}>(url).pipe(
        map(data => data.provincias)
      );
    }
    
    getLocalitiesByProvince(provinceId: number): Observable<Localidad[]> {
      const url = `${this.apiUrl}/localidades.json`;
      console.log('URL for localities:', url); 
      return this.http.get<{localidades: Localidad[]}>(url).pipe(
        map(data => data.localidades.filter(loc => loc.id_provincia === provinceId))
      );
    }
    
    getSchoolsByLocality(localityId: number): Observable<Escuela[]> {
      return this.http.get<Escuela[]>(`${this.apiUrl}/escuelas.json?localityId=${localityId}`);
    }
  }
