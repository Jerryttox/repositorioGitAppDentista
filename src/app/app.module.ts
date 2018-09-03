import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { GaleriaSonrisasComponent } from './galeria-sonrisas/galeria-sonrisas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './inicio/historia/historia.component';
import { MisVisComponent } from './/inicio/mis-vis/mis-vis.component';
import { EspecialistasComponent } from './nosotros/especialistas/especialistas.component';
import { ClinicaDentalComponent } from './nosotros/clinica-dental/clinica-dental.component';

const ruteoApp: Routes=[
  { path: '', component: InicioComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'MisVis', component: MisVisComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'clinicaDental', component: ClinicaDentalComponent},
  { path: 'especialistas', component: EspecialistasComponent},
  { path: 'tratamientos', component: TratamientosComponent},
  { path: 'galeria_de_sonrisas', component: GaleriaSonrisasComponent},
  { path: 'contacto', component: ContactoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NosotrosComponent,
    TratamientosComponent,
    GaleriaSonrisasComponent,
    ContactoComponent,
    InicioComponent,
    HistoriaComponent,
    MisVisComponent,
    ClinicaDentalComponent,
    EspecialistasComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ruteoApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
