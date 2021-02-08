import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[toggleMenu]'
})

export class ToggleMenuDirective implements AfterViewInit {

  menu
  toggled = false

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    console.log(this.el.nativeElement.nextElementSibling);
    this.menu = this.el.nativeElement.nextElementSibling
    console.log(this.menu.style);

  }

  @HostListener('click') toggleMenu() {
    console.log(this.menu.style);

    if(!this.toggled) {
      this.menu.style.height = '240px'
      this.menu.style.transform = 'scaleY(1)'
    } else {
      this.menu.style.height = '0'
      this.menu.style.transform = 'scaleY(0)'
    }
    console.log(this.menu.style);
    this.toggled = !this.toggled
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    console.log(event.target.innerWidth);
    if(event.target.innerWidth > 992) {
      this.menu.style.height = '80px'
      this.menu.style.transform = 'scaleY(1)'
      console.log('height')
    } else {
      this.menu.style.height = '0'
      this.menu.style.transform = 'scaleY(0)'
    }
 }
}
