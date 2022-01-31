import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ByeComponent } from './bye.component';
import { CanDeactivateGuard } from '../guards/can-deactivate-guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ByeComponent, canDeactivate: [CanDeactivateGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class ByeRoutingModule { }
