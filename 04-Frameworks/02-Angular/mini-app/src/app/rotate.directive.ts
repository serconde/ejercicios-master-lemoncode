import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[rotate]',
})
export class RotateDirective {
  private angle: number = 0;

  constructor(private element: ElementRef) {}

  @Input() rotate: number;

  @HostListener('click') onMouseClick() {
    const element = this.element.nativeElement as HTMLElement;

    if (element.tagName === "IMG") {
      this.angle += +this.rotate;
      this.element.nativeElement.style.transform = `rotate(${this.angle}deg)`;
    }
  }
}
