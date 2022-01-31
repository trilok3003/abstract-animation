import { HelloComponent } from './hello.component';
import { NgModule } from '@angular/core';
import { HelloRoutingModule } from './hello-routing.module';

@NgModule({
  imports: [HelloRoutingModule],
  declarations: [
    HelloComponent
  ]
})
export class HelloModule {
}
