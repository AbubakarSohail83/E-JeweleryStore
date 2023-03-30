import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfFalse]'
})
export class IfFalseDirective implements OnChanges{
  @Input("appIfFalse") appCondition:boolean;

  constructor(private templateRef:TemplateRef<any>, private vdRef:ViewContainerRef){    
  }

  ngOnChanges(){
    console.log("function called");
    if(this.appCondition==false)
    {
      this.vdRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.vdRef.clear(); 
    }
  }


}
