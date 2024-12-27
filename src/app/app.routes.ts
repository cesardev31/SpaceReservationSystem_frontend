import { Routes } from '@angular/router';
import { ReservationFormComponent } from './reservations/reservation-form/reservation-form.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'reservations', pathMatch: 'full' },
  { path: 'reservations', component: ReservationFormComponent },
  { path: '**', redirectTo: 'reservations' },
];
