import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CuelloComponent } from './cuello/cuello.component';
import { CruzComponent } from './cruz/cruz.component';
import { DorsoComponent } from './dorso/dorso.component';
import { LomoComponent } from './lomo/lomo.component';
import { GrupaComponent } from './grupa/grupa.component';
import { ColaComponent } from './cola/cola.component';
import { ExtremidadesAnterioresComponent } from './extremidades-anteriores/extremidades-anteriores.component';
import { ExtremidadesPosterioresComponent } from './extremidades-posteriores/extremidades-posteriores.component';
import { CascoComponent } from './casco/casco.component';
import { CuernoComponent } from './cabeza/cuerno/cuerno.component';
import { OjosComponent } from './cabeza/ojos/ojos.component';
import { SuelaComponent } from './casco/suela/suela.component';
import { ParedComponent } from './casco/pared/pared.component';
import { MasloComponent } from './cola/maslo/maslo.component';
import { GargantaComponent } from './cuello/garganta/garganta.component';
import { CopeteComponent } from './cuello/copete/copete.component';
import { CostillasComponent } from './dorso/costillas/costillas.component';
import { RodillasComponent } from './extremidades-anteriores/rodillas/rodillas.component';
import { PatasDelanterasComponent } from './extremidades-anteriores/patas-delanteras/patas-delanteras.component';
import { CorvejonComponent } from './extremidades-posteriores/corvejon/corvejon.component';
import { PatasTraserasComponent } from './extremidades-posteriores/patas-traseras/patas-traseras.component';
import { CaderaComponent } from './grupa/cadera/cadera.component';
import { NalgasComponent } from './grupa/nalgas/nalgas.component';
import { VientreComponent } from './lomo/vientre/vientre.component';
import { FaldaComponent } from './lomo/falda/falda.component';
import { Cola1Component } from './cola/cola1/cola1.component';
import { Cuello1Component } from './cruz/cuello1/cuello1.component';
import { Lomo1Component } from './cruz/lomo1/lomo1.component';
import { PechoComponent } from './dorso/pecho/pecho.component';



@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    CuelloComponent,
    CruzComponent,
    DorsoComponent,
    LomoComponent,
    GrupaComponent,
    ColaComponent,
    ExtremidadesAnterioresComponent,
    ExtremidadesPosterioresComponent,
    CascoComponent,
    CuernoComponent,
    OjosComponent,
    SuelaComponent,
    ParedComponent,
    MasloComponent,
    GargantaComponent,
    CopeteComponent,
    CostillasComponent,
    RodillasComponent,
    PatasDelanterasComponent,
    CorvejonComponent,
    PatasTraserasComponent,
    CaderaComponent,
    NalgasComponent,
    VientreComponent,
    FaldaComponent,
    Cola1Component,
    Cuello1Component,
    Lomo1Component,
    PechoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
