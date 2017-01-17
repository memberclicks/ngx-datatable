import { DataTableColumnDirective } from '../components/columns';
import { camelCase, deCamelCase, id } from '../utils';

/**
 * Sets the column defaults
 * 
 * @export
 * @param {any[]} columns
 * @returns
 */
export function setColumnDefaults(columns: any[]) {
  if(!columns) return;

  for(let column of columns) {
    if(!column.$$id) {
      column.$$id = id();
    }

    // translate name => prop
    if(!column.prop && column.name) {
      column.prop = camelCase(column.name);
    }

    // format props if no name passed
    if(column.prop && !column.name) {
      column.name = deCamelCase(column.prop);
    }

    if(!column.hasOwnProperty('resizeable')) {
      column.resizeable = true;
    }

    if(!column.hasOwnProperty('sortable')) {
      column.sortable = true;
    }

    if(!column.hasOwnProperty('draggable')) {
      column.draggable = true;
    }

    if(!column.hasOwnProperty('canAutoResize')) {
      column.canAutoResize = true;
    }

    if(!column.hasOwnProperty('width')) {
      column.width = 150;
    }
  }
}

/**
 * Translates templates definitions to objects
 * 
 * @export
 * @param {DataTableColumnDirective[]} templates
 * @returns {any[]}
 */
export function translateTemplates(templates: DataTableColumnDirective[]): any[] {
  let result: any[] = [];

  for(const temp of templates) {
    let col: any = {};

    const props = Object.getOwnPropertyNames(temp);
    for(const prop of props) {
      col[prop] = temp[prop];
    }
    //Possibly add in protections for both checkbox and regular header template. Will ask JOSH about this API
    //And what seems most natural
    if(temp.headerTemplate) {
      col.headerTemplate = temp.headerTemplate;
    }else if(temp.headerCheckboxTemplate){
      col.headerCheckboxTemplate = temp.headerCheckboxTemplate;
    }

    if(temp.cellTemplate) {
      col.cellTemplate = temp.cellTemplate;
    }else if(temp.cellCheckboxTemplate){
      col.cellCheckboxTemplate = temp.cellCheckboxTemplate;
    }

    result.push(col);
  }

  return result;
}
