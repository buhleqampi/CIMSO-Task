import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BinaryRequestService {

  private baseUrl = "api/binary_object_request"

  constructor(private http: HttpClient) { }

  getBinaryRequest(objectId: string) : Observable<any> {

    const body = { hg_code: "demo", payload: {"Object Unique ID": objectId } }

    const headers = new HttpHeaders({
      'Authorization': JSON.stringify({
        "Client Login ID": "CiMSO.dev",
        "Client Password": "CiMSO.dev",
        "hg_pass": "nGXUF1i^57I^ao^o",
    }),
      'Content-Type': 'application/json',
    });

    return this.http.post(this.baseUrl,body, {headers})

  }
  }
