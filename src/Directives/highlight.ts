import { Directive, ElementRef, HostListener,inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(private ele : ElementRef) {} 


  @HostListener('mouseenter')
  onMouseEnter(){
    this.ele.nativeElement.style.backgroundColor = 'red'
    this.ele.nativeElement.style.color = 'white'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.ele.nativeElement.style.backgroundColor = ''
    this.ele.nativeElement.style.color = '#2f0d68'
  }

}
