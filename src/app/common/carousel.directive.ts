import { AfterViewInit, ElementRef, HostListener, TemplateRef } from "@angular/core";
import { Directive, Input } from "@angular/core";

@Directive({
  selector: '[carousel]'
})

export class CarouselDirective implements AfterViewInit {

  current = 2
  direction: 'right' | 'left' | 'normal'

  constructor(private el: ElementRef) {}

  ngAfterViewInit( ){
    this.el.nativeElement.children[0].addEventListener('click', this.onClickLeft.bind(this))
    this.el.nativeElement.children[2].addEventListener('click', this.onClickRight.bind(this))
  }

  onClickLeft() {
    if(this.current === 2) {
      this.el.nativeElement.children[1].children[0].style.transform = 'translateX(200px)'
    } else {
      this.el.nativeElement.children[1].children[0].style.transform = 'translateX(0px)'
    }
    if(this.current > 1) {
      this.current--
    }
  }

  onClickRight() {
    if(this.current === 2) {
      this.el.nativeElement.children[1].children[0].style.transform = 'translateX(-200px)'
    } else {
      this.el.nativeElement.children[1].children[0].style.transform = 'translateX(0px)'
    }
    if(this.current < 3) {
      this.current++
    }
  }

}
