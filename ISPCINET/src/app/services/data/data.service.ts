import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Province, Locality, School } from 'src/app/models/province';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = '../../../assets/data.json';
  private provinces$?: Observable<Province[]>;

  constructor(private http: HttpClient) {}

  private fetchProvinces(): Observable<Province[]> {
    return this.http.get<{ provinces: Province[] }>(this.apiUrl).pipe(
      tap(data => console.log('Fetched raw data:', data)),
      map(data => data.provinces),
      catchError((error: any) => {
        console.error('Error in DataService:', error);
        return throwError(error);
      }),
      shareReplay(1)
    );
  }

  getProvinces(): Observable<Province[]> {
    if (!this.provinces$) {
      this.provinces$ = this.fetchProvinces();
    }
    return this.provinces$;
  }

  getLocalitiesByProvince(provinceId: number): Observable<Locality[]> {
    return this.getProvinces().pipe(
      map(provinces => {
        const selectedProvince = provinces.find(p => p.id_provincia === provinceId);
        return selectedProvince ? selectedProvince.localidades : [];
      }),
      tap(localities => console.log('Localities:', localities))
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
