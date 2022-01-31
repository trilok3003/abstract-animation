import { Component, Input } from '@angular/core';
import { AbstractAnimatedComponent } from '../shared/abstract-animated.component';

@Component({
  selector: 'bye',
  template: `<div #myDiv>Bye !</div>`,
  styles: [`div { 
      font-family: Lato;
      font-size: 2em;
      text-align: center;
      color: white;
      width: 100%;
      height: 80vh;
      background-color: #2ecc71;
     }`]
})
export class ByeComponent extends AbstractAnimatedComponent {
}
