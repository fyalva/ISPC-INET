import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Province, Locality, School } from 'src/app/models/province';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = '../../../assets/data.json';

  constructor(private http: HttpClient) {}

  getProvinces(): Observable<Province[]> {
    return this.http.get<{ provinces: Province[] }>(this.apiUrl).pipe(
      map(data => data.provinces),
      catchError((error: any) => {
        console.error('Error in DataService:', error);
        throw error; 
      })
    );
  }

  getLocalitiesByProvince(provinceId: number): Observable<Locality[]> {
    return this.getProvinces().pipe(
      map(provinces => {
        const selectedProvince = provinces.find(p => p.id_provincia === provinceId);
        return selectedProvince ? selectedProvince.localidades : [];
      })
    );
  }
  

  getSchoolsByLocality(localityId: number): Observable<School[]> {
    return this.getProvinces().pipe(
      map(provinces => {
        const allLocalities = provinces.flatMap(p => p.localidades);
        const selectedLocality = allLocalities.find(l => l.id_localidad === localityId);
        return selectedLocality ? selectedLocality.schools : [];
      })
    );
  }
}
