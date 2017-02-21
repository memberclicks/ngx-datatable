import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';
import { DataTableColumnHeaderDirective } from './column-header.directive';
import { DataTableColumnCellDirective } from './column-cell.directive';
import { DataTableColumnCheckboxCellDirective } from './column-checkbox-cell.directive';
import { DataTableColumnCheckboxHeaderDirective } from './column-checkbox-header.directive';

@Directive({ selector: 'ngx-datatable-column' })
export class DataTableColumnDirective {

  @Input() name: string;
  @Input() prop: string;
  @Input() frozenLeft: any;
  @Input() frozenRight: any;
  @Input() flexGrow: number;
  @Input() resizeable: boolean;
  @Input() comparator: Function;
  @Input() pipe: any;
  @Input() sortable: boolean;
  @Input() draggable: boolean;
  @Input() canAutoResize: boolean;
  @Input() minWidth: number;
  @Input() width: number;
  @Input() maxWidth: number;
  @Input() checkboxable: boolean;
  @Input() headerCheckboxable: boolean;

  @Input()
  @ContentChild(DataTableColumnCellDirective, { read: TemplateRef }) 
  cellTemplate: TemplateRef<any>;

  @Input()
  @ContentChild(DataTableColumnHeaderDirective, { read: TemplateRef }) 
  headerTemplate: TemplateRef<any>;
  
  @Input()
  @ContentChild(DataTableColumnCheckboxCellDirective, { read: TemplateRef }) 
  cellCheckboxTemplate: TemplateRef<any>;
  
  @Input()
  @ContentChild(DataTableColumnCheckboxHeaderDirective, { read: TemplateRef }) 
  headerCheckboxTemplate: TemplateRef<any>;

}
