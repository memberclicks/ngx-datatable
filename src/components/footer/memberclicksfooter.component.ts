import {
  Component, Output, EventEmitter, ChangeDetectionStrategy, Input
} from '@angular/core';

@Component({
  selector: 'datatable-footer',
  template: `
    <div
      [style.height.px]="footerHeight">
      <div class="page-count">{{rowCount.toLocaleString()}} {{totalMessage}}</div>
      <div *ngIf="!pagerSelect?.template && isVisible">
        <select [(ngModel)]="pageSize" (change)="changePageSize($event)">
          <option *ngFor="let t of pageSizes" [value]="t" [selected]="t === (pageSize ? 'selected' : '')">{{t}}</option>
        </select>
      </div>
      <div *ngIf="isVisible && pagerSelect && pagerSelect.template">
        <template
          [ngTemplateOutlet]="pagerSelect.template"
          [ngOutletContext]="templateContext">
        </template>
      </div>
      <datatable-pager
      [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (btnchange)="page.emit($event)">
       </datatable-pager>
     </div>
  `,
  host: {
    class: 'datatable-footer'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableFooterComponent {


  @Input() footerHeight: number;
  @Input() rowCount: number;
  @Input() pageSize: number;
  @Input() pageSizes: number[];
  @Input() offset: number;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;
  @Input() totalMessage: string;
  @Input() pagerSelect: any;

  @Output() page: EventEmitter<any> = new EventEmitter();

  templateContext = {
    parent : this
  }
  get isVisible(): boolean {
    /**
     * Need to check and see if this still works
     */
    return (this.rowCount / this.pageSize) > 1;
  }

  get curPage(): number {
    //this.offset = isNaN(this.offset)?0:this.offset;

    return this.offset + 1;
  }

  changePageSize(evt){
    this.pageSize = +this.pageSize;
    this.page.emit({pageSize : this.pageSize, page: this.curPage});
  }

}
