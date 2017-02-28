import { Component } from '@angular/core';

@Component({
  selector: 'chkbox-selection-demo',
  template: `
    <div>
      <h3>
        Checkbox Selection
        <small>
          <a href="#" (click)="add()">Add</a> |
          <a href="#" (click)="update()">Update</a> |
          <a href="#" (click)="remove()">Remove</a> 
        </small>
      </h3>
      <div style='float:left;width:75%'>
        <ngx-datatable
          style="width: 90%"
          class="material"
          [rows]="rows"
          [columnMode]="'force'"
          [headerHeight]="56"
          [footerHeight]="50"
          [rowHeight]="'auto'"
          [limit]="5"
          [selected]="selected"
          [selectionType]="'checkbox'"
          (activate)="onActivate($event)"
          (select)='onSelect($event)'>
          <ngx-datatable-column
            [width]="68"
            [sortable]="false"
            [canAutoResize]="false"
            [draggable]="false"
            [resizeable]="false"
            [headerCheckboxable]="true"
            [checkboxable]="true">
            <template let-isSelected="isSelected" let-onCheckboxChange="onCheckboxChange" ngx-datatable-checkbox-cell-template>
              <md-checkbox [checked]="isSelected()" (change)="onCheckboxChange($event)"></md-checkbox>
            </template>
            <template let-selected="allRowsSelected" let-parent="parent" let-emit="emit" ngx-datatable-checkbox-header-template>
              <md-checkbox [checked]="parent().allRowsSelected" (change)="parent().select.emit(!parent().allRowsSelected)"></md-checkbox>
            </template>
          </ngx-datatable-column>
          <ngx-datatable-column name="Name"></ngx-datatable-column>
          <ngx-datatable-column name="Gender"></ngx-datatable-column>
          <ngx-datatable-column name="Company"></ngx-datatable-column>
        </ngx-datatable>
      </div>

      <div class='selected-column'>
        <h4>Selections <small>({{selected?.length}})</small></h4>
        <ul>
          <li *ngFor='let sel of selected'>
            {{sel.name}}
          </li>
          <li *ngIf="!selected?.length">No Selections</li>
        </ul>
      </div>
    </div>
  `
})
export class CheckboxSelectionComponent {

  rows = [];
  selected = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [ this.rows[1], this.rows[3] ];
  }

  remove() {
    this.selected = [];
  }

  checkIsSelected(parent){
    return parent.isSelected ? true : false;
  }
  checkParent(evt, parent){
    parent.onCheckboxChange(evt);
  }

}
