import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[hxRandomIdGenerator]'
})
export class RandomIdGeneratorDirective {

  constructor(private renderer: Renderer2, private hostElement: ElementRef) 
  {
  }

  ngOnInit(): void {
    this.hostElement.nativeElement.setAttribute('id', this.guidGenerator());
  }

  guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
}
