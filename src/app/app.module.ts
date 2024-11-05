import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitTypeComponent } from './components/unit-type/unit-type.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BinaryRequestComponent } from './components/binary-request/binary-request.component';


@NgModule({
  declarations: [
    AppComponent,
    UnitTypeComponent,
    BookingsComponent,
    BinaryRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
