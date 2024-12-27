import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) {}

  getReservations(params?: any): Observable<any> {
    return this.http.get(`${this.apiUrl}`, { params });
  }

  createReservation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
