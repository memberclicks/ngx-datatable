import { Input, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableRowHoverTemplateDirective } from './row-hover-template.directive';

@Directive({ selector: 'ngx-datatable-row-hover' })
export class DatatableRowHoverDirective {

  @Input() showOnHover: boolean = false;

  @Input()
  @ContentChild(DatatableRowHoverTemplateDirective, { read: TemplateRef }) 
  template: TemplateRef<any>;


}
