import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NuestroPersonalComponent } from './nuestro-personal/nuestro-personal.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { GaleriaSonrisasComponent } from './galeria-sonrisas/galeria-sonrisas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';

const ruteoApp: Routes=[
  { path: '', component: InicioComponent},
  { path: 'nuestro_personal', component: NuestroPersonalComponent},
  { path: 'tratamientos', component: TratamientosComponent},
  { path: 'galeria_de_sonrisas', component: GaleriaSonrisasComponent},
  { path: 'contacto', component: ContactoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NuestroPersonalComponent,
    TratamientosComponent,
    GaleriaSonrisasComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ruteoApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
