import { ByeComponent } from './bye.component';
import { NgModule } from '@angular/core';
import { ByeRoutingModule } from './bye-routing.module';

@NgModule({
  imports: [ByeRoutingModule],
  declarations: [
    ByeComponent
  ]
})
export class ByeModule {
}
