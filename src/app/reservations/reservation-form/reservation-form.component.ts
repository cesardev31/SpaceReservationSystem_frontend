import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-form',
  standalone: false,

  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      space: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.reservationForm.valid) {
      this.reservationService
        .createReservation(this.reservationForm.value)
        .subscribe(() => {
          alert('Reserva creada con éxito');
          this.reservationForm.reset();
        });
    }
  }
}
