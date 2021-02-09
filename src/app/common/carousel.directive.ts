import { group } from "@angular/animations";
import { HostListener } from "@angular/core";
import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";


@Directive({
  selector: '[carousel]'
})

export class CarouselDirective implements AfterViewInit {

  current = 0
  direction: 'right' | 'left' | 'normal'
  width: number
  childrenList: any[]

  constructor(private el: ElementRef) {}

  ngAfterViewInit( ){
    this.width = this.el.nativeElement.children[1].clientWidth
    this.childrenList = this.el.nativeElement.children[1].children[0].children
    console.log(this.childrenList[0].style);
    this.el.nativeElement.firstChild.addEventListener('click', this.onClickLeft.bind(this))
    this.el.nativeElement.lastChild.addEventListener('click', this.onClickRight.bind(this))
  }

  onClickLeft() {
    // if(this.current === 2) {
    //   this.el.nativeElement.children[1].children[0].style.transform = 'translateX(' + this.width +'px)'
    // } else {
    //   this.el.nativeElement.children[1].children[0].style.transform = 'translateX(0px)'
    // }
    // if(this.current > 1) {
    //   this.current--
    // }
    // if(this.current === 1) {
    //   this.el.nativeElement.firstChild.style.opacity = '0'
    // } else {
    //   this.el.nativeElement.lastChild.style.opacity = '1'
    // }
    if(this.current>0) {
      this.current--
    } else {
      this.current = this.childrenList.length-1
    }
    this.styleChange()
  }

  onClickRight() {
    // if(this.current === 2) {
    //   this.el.nativeElement.children[1].children[0].style.transform = 'translateX(-'+this.width+'px)'
    // } else {
    //   this.el.nativeElement.children[1].children[0].style.transform = 'translateX(0px)'
    // }
    // if(this.current < 3) {
    //   this.current++
    // }
    // if(this.current === 3) {
    //   this.el.nativeElement.lastChild.style.opacity = '0'
    // } else {
    //   this.el.nativeElement.firstChild.style.opacity = '1'
    // }
    if(this.current<this.childrenList.length-1) {
      this.current++
    } else {
      this.current = 0
    }
    this.styleChange()
    console.log(this.current)
  }

  styleChange() {
    for(let i=0; i<this.childrenList.length; i++) {
      if(this.current === i) {
        this.childrenList[i].style.opacity = "1"
      } else {
        this.childrenList[i].style.opacity ="0"
      }
    }
  }

  @HostListener('window:resize', ['$event']) onResize(event) {

    if(event.target.innerWidth>922) {
      for(let i=0; i<this.childrenList.length; i++) {
       this.childrenList[i].style.opacity = '1'
     }
   } else {
    this.childrenList[0].style.opacity = '1'
    this.childrenList[1].style.opacity = '0'
    this.childrenList[2].style.opacity = '0'
   }
  }

}
