import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


// Components
//services
import { InformacionService } from "./services/informacion.service";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeeComponent } from './components/homee/homee.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ContactComponent } from './components/contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AboutComponent } from './components/about/about.component';

// Rutas
const appRoutes: Routes = [
  {path: '', component: HomeeComponent},
  {path: 'homee', component: HomeeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'reservation', component: ReservationComponent}




];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeeComponent,
    RoomsComponent,
    ContactComponent,
    ReservationComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
