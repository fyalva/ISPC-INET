import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../../models/provincia.model';
import { Localidad } from '../../models/localidad.model';
import { Escuela } from '../../models/escuela.model';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


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
    console.log('getLocalitiesByProvince called with:', provinceId);
    const url = `${this.apiUrl}/localidades.json`;
    console.log('URL for localities:', url); 
    return this.http.get<{localidades: Localidad[]}>(url).pipe(
      map(data => {
        console.log('Data received:', data);
        const localities = data.localidades.filter(loc => {
          // Convierte loc.id_provincia y provinceId a números antes de compararlos
          const locProvinceId = Number(loc.id_provincia);
          const numProvinceId = Number(provinceId);
          console.log('Comparing:', locProvinceId, numProvinceId); // Nueva línea agregada
          return locProvinceId === numProvinceId;
        });
        console.log('Filtered localities:', localities);
        return localities;
      })
    );
  }
  
  
  
  getSchoolsByLocality(localityId: number): Observable<Escuela[]> {
    return this.http.get<{escuelas: Escuela[]}>(`${this.apiUrl}/escuelas.json`).pipe(
      map(data => data.escuelas.filter(school => Number(school.id_localidad) === Number(localityId))),
      tap(schools => console.log('Schools:', schools))
    );
  }
  
  
}
