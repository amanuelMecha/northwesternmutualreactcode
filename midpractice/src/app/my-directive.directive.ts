import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  array: string[] = ['green', 'red', 'blue','pink'];
  @Input() num: number = 12;
  @HostBinding('style.fontSize') theSize: string = '12px';
  @HostBinding('style.color') theColor:string=''
  @HostListener('click')
  foo() {
    this.theColor=this.array[Math.floor(Math.random()*4)]
    this.theSize = `${(this.num += this.num)}px`;
  }
  constructor() {}
}
