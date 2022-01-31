import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractAnimatedComponent } from '../shared/abstract-animated.component';

@Component({
  selector: 'hello',
  template: `<div #myDiv>Hello !</div>`,
  styles: [`div { 
      font-family: Lato;
      font-size: 2em;
      text-align: center;
      color: white;
      width: 100%;
      height: 80vh;
      background-color: #2980b9;
     }`]
})
export class HelloComponent extends AbstractAnimatedComponent {
}