import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationCalendarComponent } from './reservation-calendar/reservation-calendar.component';

@NgModule({
  declarations: [
    ReservationsComponent,
    ReservationListComponent,
    ReservationFormComponent,
    ReservationCalendarComponent,
  ],
  imports: [CommonModule, ReservationsRoutingModule, ReactiveFormsModule],
})
export class ReservationsModule {}
