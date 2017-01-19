import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableRowHoverTemplateDirective } from './row-hover-template.directive';

@Directive({ selector: 'ngx-datatable-row-hover' })
export class DatatableRowHoverDirective {

  @ContentChild(DatatableRowHoverTemplateDirective, { read: TemplateRef }) 
  template: TemplateRef<any>;

  get rowHoverTemplate(): TemplateRef<any> {
    return this.template;
  }

}
