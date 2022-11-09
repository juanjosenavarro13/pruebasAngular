import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAC01javiRoutingModule } from './pac01javi-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PAC01javiRoutingModule
  ]
})
export class PAC01javiModule { }
