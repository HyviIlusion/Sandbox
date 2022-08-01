import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatsComponent } from './stats/stats.component';
import { HeaderactionComponent } from './headeraction/headeraction.component';
import { PrestationsactionComponent } from './prestationsaction/prestationsaction.component';
import { CommunicationactionComponent } from './communicationaction/communicationaction.component';
import { CreationactionComponent } from './creationaction/creationaction.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    NavbarComponent,
    StatsComponent,
    HeaderactionComponent,
    PrestationsactionComponent,
    CommunicationactionComponent,
    CreationactionComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
