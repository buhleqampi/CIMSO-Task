import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitTypeComponent } from './components/unit-type/unit-type.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UnitTypeComponent
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
