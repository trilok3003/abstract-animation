import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { CanDeactivateGuard } from '../guards/can-deactivate-guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HelloComponent,  canDeactivate: [CanDeactivateGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
