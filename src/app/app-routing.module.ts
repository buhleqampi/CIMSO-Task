import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitTypeComponent } from './components/unit-type/unit-type.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  {path: "", redirectTo: "bookings", pathMatch: "full"},
  {path: "bookings", component: BookingsComponent},
  {path: "single_unit/:id", component: UnitTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
