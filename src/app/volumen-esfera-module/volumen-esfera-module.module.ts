import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolumenEsferaModuleRoutingModule } from './volumen-esfera-module-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    VolumenEsferaModuleRoutingModule
  ]
})
export class VolumenEsferaModuleModule { }
