import { 
  Component, Input, Renderer, ElementRef, OnInit, OnDestroy
} from '@angular/core';

@Component({
  selector: 'datatable-row-hover',
  template: `
    <ng-content></ng-content>
    <div 
      *ngIf="showOnHover" 
      class="datatable-row-hover hover-enabled" [ngClass]="{'hover-enabled' : hoverEnabled}">
      <template
        *ngIf="rowHover && rowHover.template"
        [ngTemplateOutlet]="rowHover.template"
        [ngOutletContext]="contextObject">
      </template>
    </div>
  `,
  host: {
    class: 'datatable-body-row-hover'
  }
})
export class DataTableRowHoverComponent {

  @Input() rowHover: any;
  @Input() showOnHover: boolean = true;
  hoverEnabled: boolean = true;
  enterCallback: Function;
  leaveCallback: Function;
  private enableMouseEvents: boolean = true;
  contextObject = {
    parent : {
      disableHover : () => this.hoverEnabled = false,
      enableHover : () => this.hoverEnabled = true
    }
  }


}
