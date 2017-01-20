import { 
  Component, Input, Renderer, ElementRef, OnInit, OnDestroy
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
export class DataTableRowHoverComponent implements OnInit, OnDestroy {

  @Input() rowHoverTemplate: any;
  @Input() showTemplate: boolean = false;
  hoverEnabled: boolean = false;
  enterCallback: Function;
  leaveCallback: Function;

  constructor( private renderer : Renderer, private el : ElementRef){
  }

  ngOnInit(){
    if(this.showTemplate && this.rowHoverTemplate){
        this.enterCallback = this.renderer.listen(this.el.nativeElement, "mouseenter", ( event ) => this.hoverEnabled = true );
        this.leaveCallback = this.renderer.listen(this.el.nativeElement, "mouseleave", ( event ) => this.hoverEnabled = false );
    }
  }
  ngOnDestroy(){
    /**
     * Cleanup listeners for hover on destroy to avoid memory leaks
     */
    if(this.enterCallback != null && this.leaveCallback != null){
      this.enterCallback();
      this.leaveCallback();
    }
  }
}
