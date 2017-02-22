import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';

import {
  DatatableComponent,
  DataTableColumnDirective,
  DataTableHeaderComponent,
  DataTableBodyComponent,
  DataTableFooterComponent,
  DataTableHeaderCellComponent,
  DataTablePagerComponent,
  DataTableBodyRowComponent,
  DataTableRowWrapperComponent,
  ProgressBarComponent,
  DataTableBodyCellComponent,
  DatatableRowDetailDirective,
  DataTableRowHoverComponent,
  ScrollerComponent,
  DataTableSelectionComponent,
  DataTableColumnHeaderDirective,
  DataTableColumnCellDirective,
  DatatableRowDetailTemplateDirective,
  DataTableColumnCheckboxHeaderDirective,
  DataTableColumnCheckboxCellDirective,
  DatatableRowHoverDirective,
  DatatableRowHoverTemplateDirective,
  DatatablePagerSelectDirective,
  DatatablePagerSelectTemplateDirective
} from './components';

import {
  VisibilityDirective,
  LongPressDirective,
  ResizeableDirective,
  OrderableDirective,
  DraggableDirective
} from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    VisibilityDirective,
    DraggableDirective,
    ResizeableDirective,
    OrderableDirective,
    LongPressDirective,
    ScrollerComponent,
    DatatableComponent,
    DataTableColumnDirective,
    DataTableHeaderComponent,
    DataTableHeaderCellComponent,
    DataTableBodyComponent,
    DataTableFooterComponent,
    DataTablePagerComponent,
    ProgressBarComponent,
    DataTableBodyRowComponent,
    DataTableRowWrapperComponent,
    DataTableRowHoverComponent,
    DatatableRowDetailDirective,
    DatatableRowDetailTemplateDirective,
    DataTableBodyCellComponent,
    DataTableSelectionComponent,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableColumnCheckboxHeaderDirective,
    DataTableColumnCheckboxCellDirective,
    DatatableRowHoverDirective,
    DatatableRowHoverTemplateDirective,
    DatatablePagerSelectDirective,
    DatatablePagerSelectTemplateDirective
  ],
  exports: [
    DatatableComponent,
    DatatableRowDetailDirective,
    DatatableRowDetailTemplateDirective,
    DatatableRowHoverDirective,
    DatatableRowHoverTemplateDirective,
    DatatablePagerSelectDirective,
    DatatablePagerSelectTemplateDirective,
    DataTableColumnDirective,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableColumnCheckboxHeaderDirective,
    DataTableColumnCheckboxCellDirective
  ]
})
export class NgxDatatableModule { }
