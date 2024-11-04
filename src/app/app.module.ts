import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitTypeComponent } from './components/unit-type/unit-type.component';
import { BookingsComponent } from './components/bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitTypeComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
