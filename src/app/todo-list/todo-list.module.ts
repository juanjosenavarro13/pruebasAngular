import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, TodoListRoutingModule],
})
export class TodoListModule {}
