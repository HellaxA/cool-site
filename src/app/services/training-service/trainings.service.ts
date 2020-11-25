import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Training} from "../../models/training/training";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {


  trainingUrl = 'http://localhost:8080/api/trainings';

  constructor(private httpClient: HttpClient) { }

  getTrainings(): Observable<Training[]> {
    return this.httpClient.get<Training[]>(this.trainingUrl);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.trainingUrl}/${id}`);
  }

  createTraining(training: Training): Observable<any> {
    return this.httpClient.post<any>(this.trainingUrl, training);
  }
}
