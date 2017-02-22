import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngx-datatable-row-hover-template]'
})
export class DatatableRowHoverTemplateDirective {
  constructor(public template: TemplateRef<any>) { };
}
