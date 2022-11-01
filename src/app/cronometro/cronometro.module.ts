import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronometroRoutingModule } from './cronometro-routing.module';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, CronometroRoutingModule],
})
export class CronometroModule {}
