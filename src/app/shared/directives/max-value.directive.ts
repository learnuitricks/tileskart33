import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[utMaxValue]'
})
export class MaxValueDirective {


  attributeValue;
  currentElementValue;
  @HostListener('change') onvalueChange(){
    this.currentElementValue = this.el.nativeElement.value;

    if(this.currentElementValue > this.attributeValue){
      let divElement = this.render.createElement('div');
      let textElement = this.render.createText('input is more than permissible value');
      this.render.appendChild(divElement,textElement);
      this.render.addClass(divElement,'alert');
      this.render.addClass(divElement,'alert-danger');
      this.render.setStyle(divElement,'margin-top','5px');
      this.render.appendChild(this.el.nativeElement.parentElement,divElement);

    }
  }

  constructor(private el:ElementRef, private render:Renderer2) {
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.attributes["utMaxValue"].value);
    // the value entered by user
    this.attributeValue = this.el.nativeElement.attributes["utMaxValue"].value
   }

}
