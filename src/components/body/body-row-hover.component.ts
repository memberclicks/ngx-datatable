import { 
  Component, Input, Renderer, ElementRef, OnInit
} from '@angular/core';

@Component({
  selector: 'datatable-row-hover',
  template: `
    <ng-content></ng-content>
    <div 
      *ngIf="hoverEnabled"
      [style.height.px]="detailRowHeight" 
      class="datatable-row-hover">
      <template
        *ngIf="rowHoverTemplate"
        [ngTemplateOutlet]="rowHoverTemplate">
      </template>
    </div>
  `
})
export class DataTableRowHoverComponent implements OnInit {

  @Input() rowHoverTemplate: any;
  @Input() showTemplate: boolean = false;
  hoverEnabled: boolean = false;

  constructor( private renderer : Renderer, private el : ElementRef){
  }

  ngOnInit(){
    if(this.showTemplate && this.rowHoverTemplate){
        this.renderer.listen(this.el.nativeElement, "mouseenter", ( event ) => this.hoverEnabled = true );
        this.renderer.listen(this.el.nativeElement, "mouseleave", ( event ) => this.hoverEnabled = false );
    }
  }
}
