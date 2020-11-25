import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomRequest} from "../../models/request/custom-request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  requestUrl = 'http://localhost:8080/api/requests';

  constructor(private httpClient: HttpClient) { }

  creteRequest(request: CustomRequest): Observable<any> {
    return this.httpClient.post<any>(this.requestUrl, request);
  }

  getRequests(): Observable<CustomRequest[]> {
    return this.httpClient.get<CustomRequest[]>(this.requestUrl);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.requestUrl}/${id}`);
  }
}
