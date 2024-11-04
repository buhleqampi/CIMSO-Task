import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/unittype';

@Injectable({
  providedIn: 'root'
})
export class UnitTypeService {

  private apiUrl = ''; 

  constructor(private http: HttpClient) {}

  getUnitTypes(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

}
