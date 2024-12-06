import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitTypeComponent } from './components/unit-type/unit-type.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BinaryRequestComponent } from './components/binary-request/binary-request.component';
import { BookComponent } from './components/book/book.component';
import { SingleComponent } from './components/single/single.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bookings/:id', component: BookingsComponent },
  { path: 'unitype', component: UnitTypeComponent },
  { path: 'binary', component: BinaryRequestComponent },
  { path: 'book', component: BookComponent },
  { path: 'single', component: SingleComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
