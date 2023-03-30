import { Directive ,ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  @Input('appAppHighlight') appHighLight='';
  constructor(private el:ElementRef) 
  {
  }
   @HostListener('mouseenter')onMouseEnter(){
      this.highlight(this.appHighLight,'DarkGray');
   }
   @HostListener('mouseleave')onMouseLeave(){
    this.highlight('','');
 }


   private highlight(bgColor:string,frColor:string)
   {
    this.el.nativeElement.style.backgroundColor=bgColor;
    this.el.nativeElement.style.Color=frColor;
   }
  }
