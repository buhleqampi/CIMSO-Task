import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitTypeService {

  private apiUrl = "api/unit_type_info_request";

  constructor(private http: HttpClient) { }

  getUnitTypeInfo(): Observable<any> {

    const body = { hg_code: "demo", payload: {} }

    const headers = new HttpHeaders({
      'Authorization': JSON.stringify({
        "Client Login ID": "CiMSO.dev",
        "Client Password": "CiMSO.dev",
        "hg_pass": "nGXUF1i^57I^ao^o",
      }),
      'Content-Type': 'application/json',

    });

    return this.http.post(this.apiUrl,body, {headers})
  }
}
