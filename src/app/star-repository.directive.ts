import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStarRepository]'
})
export class StarRepositoryDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClicks() {
    this.starColor('red');
  }

  private starColor(action: string) {
    this.elementRef.nativeElement.style.color = action;
  }
}
