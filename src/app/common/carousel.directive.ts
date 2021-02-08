import { HostListener } from "@angular/core";
import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";


@Directive({
  selector: '[carousel]'
})

export class CarouselDirective implements AfterViewInit {

  current = 2
  direction: 'right' | 'left' | 'normal'
  width: number

  constructor(private el: ElementRef) {}

  ngAfterViewInit( ){
    console.log(this.el.nativeElement.children[1].clientWidth)
    this.width = this.el.nativeElement.children[1].clientWidth
    this.el.nativeElement.firstChild.addEventListener('click', this.onClickLeft.bind(this))
    this.el.nativeElement.lastChild.addEventListener('click', this.onClickRight.bind(this))
  }

  onClickLeft() {
    if(this.current === 2) {
      this.el.nativeElement.children[1].children[0].style.transform = 'translateX(' + this.width +'px)'
    } else {
      this.el.nativeElement.children[1].children[0].style.transform = 'translateX(0px)'
    }
    if(this.current > 1) {
      this.current--
    }
    if(this.current === 1) {
      this.el.nativeElement.firstChild.style.opacity = '0'
    } else {
      this.el.nativeElement.lastChild.style.opacity = '1'
    }
  }

  onClickRight() {
    if(this.current === 2) {
      this.el.nativeElement.children[1].children[0].style.transform = 'translateX(-'+this.width+'px)'
    } else {
      this.el.nativeElement.children[1].children[0].style.transform = 'translateX(0px)'
    }
    if(this.current < 3) {
      this.current++
    }
    if(this.current === 3) {
      this.el.nativeElement.lastChild.style.opacity = '0'
    } else {
      this.el.nativeElement.firstChild.style.opacity = '1'
    }
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.width = this.el.nativeElement.children[1].clientWidth
  }

}
