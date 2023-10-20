import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedLocality = new BehaviorSubject<number | null>(null);

  setSelectedLocality(localityId: number | null) {
    this.selectedLocality.next(localityId);
  }

  getSelectedLocality() {
    return this.selectedLocality.asObservable();
  }
}