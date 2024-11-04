import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  api_url_bookings = "/api/get_booking_units_request";

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<any>{

    const body = { hg_code: "demo", payload: {} }

    const headers = new HttpHeaders({
      'Authorization': JSON.stringify({
        "Client Login ID": "CiMSO.dev",
        "Client Password": "CiMSO.dev",
        "hg_pass": "nGXUF1i^57I^ao^o",
      }),
      'Content-Type': 'application/json',

    });

    
    return this.http.post(this.api_url_bookings,body, {headers})
  }
}
