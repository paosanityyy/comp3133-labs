import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true,
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    // Get the current value of the input
    let value: string = this.el.nativeElement.value;
    // Convert the input value to uppercase
    this.el.nativeElement.value = value.toUpperCase();
  }

  // You can remove or comment out the onFocus method if it's not needed
  // @HostListener('focus') onFocus() {
  //   console.log('on Focus');
  // }
}
