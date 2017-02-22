import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatablePagerSelectTemplateDirective } from './pager-select-template.directive';

@Directive({ selector: 'ngx-datatable-pager-select' })
export class DatatablePagerSelectDirective {

  @ContentChild(DatatablePagerSelectTemplateDirective, { read: TemplateRef }) 
  template: TemplateRef<any>;

}
