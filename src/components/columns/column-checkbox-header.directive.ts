import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-checkbox-header-template]' })
export class DataTableColumnCheckboxHeaderDirective {
  constructor(public template: TemplateRef<any>) { };
}
