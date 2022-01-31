import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  style,
  animate,
  AnimationBuilder,
  AnimationStyleMetadata,
  AnimationAnimateMetadata
} from '@angular/animations';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({})
export abstract class AbstractAnimatedComponent implements OnInit {
  readonly ANIMATION_TIME = 200;
  @ViewChild('myDiv') el: ElementRef;
  animation;
  player;

  constructor(private _builder: AnimationBuilder) { }

  ngOnInit() {
    this.animation = this._builder.build(this.slideIn(this.ANIMATION_TIME));
    this.player = this.animation.create(this.el.nativeElement, {});
    this.player.play();
  }

  canDeactivate() {
    this.animation = this._builder.build(this.slideOut(this.ANIMATION_TIME));
    this.player = this.animation.create(this.el.nativeElement, {});
    this.player.play();
    return timer(this.ANIMATION_TIME).pipe(mapTo(true)).toPromise();
  }

  private slideOut(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
    return [style({ transform: 'translateX(0)' }), animate(time, style({ transform: 'translateX(100%)' }))];
  }
  private slideIn(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
    return [style({ transform: 'translateX(-100%)' }), animate(time, style({ transform: 'translateX(0)' }))];
  }
}