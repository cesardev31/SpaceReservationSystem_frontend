import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  standalone: false,

  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  reservations: any[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.reservations = this.reservations.filter((res) => res.id !== id);
    });
  }
}
