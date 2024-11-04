import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitTypeService {

  private apiUrl = 'https://demo.ix.cimsoweb.com/unit_type_info_request';

  constructor() { }

  getUnitTypeInfo(): Observable<any> {
    return new Observable(observer => {
      fetch(this.apiUrl, { method: 'GET' })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
