import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-checkbox-cell-template]' })
export class DataTableColumnCheckboxCellDirective {
  constructor(public template: TemplateRef<any>) { };
}
