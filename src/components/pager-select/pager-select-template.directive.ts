import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngx-datatable-pager-select-template]'
})
export class DatatablePagerSelectTemplateDirective {
  constructor(public template: TemplateRef<any>) { };
}
