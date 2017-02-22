import { Component, ViewChildren, QueryList } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';

@Component({
  selector: 'row-hover-demo',
  template: `
    <div>
      <h3>Flex Column Width Distribution</h3>
      <ngx-datatable
        class="material"
        [columnMode]="'flex'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [rows]="rows">
        <ngx-datatable-row-hover [showOnHover]="true">
          <template ngx-datatable-row-hover-template let-parent="parent">
            <button md-raised-button color="primary">Action</button>
            <button md-raised-button [mdMenuTriggerFor]="menu" (click)="disableRow(parent)">
               Menu
            </button>
          </template>
        </ngx-datatable-row-hover>
        <ngx-datatable-column name="Name" [flexGrow]="3">
          <template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender" [flexGrow]="1">
          <template let-row="row" let-value="value" ngx-datatable-cell-template>
            {{value}}
          </template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age" [flexGrow]="1">
          <template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
    <md-menu #menu="mdMenu">
      <button md-menu-item> Refresh </button>
      <button md-menu-item> Settings </button>
      <button md-menu-item> Help </button>
      <button md-menu-item disabled> Sign Out </button>
  </md-menu>
  `
})
export class RowHoversComponent {

  rows = [];
  lastRowHovered;
  private subscription;
  private triggerChildren = [];
  @ViewChildren(MdMenuTrigger) trigger: QueryList<MdMenuTrigger>;

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    });

  }


  disableRow(row){
     this.lastRowHovered = row;
     row.disableHover();
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  ngAfterViewInit(){
    this.subscription = this.trigger.changes.subscribe( (list) => {
      this.triggerChildren.forEach((item) => item.unsubscribe());
      this.triggerChildren = [];
       if(list.length){
          list.forEach((item) => this.triggerChildren.push(item.onMenuClose.subscribe((val) => this.lastRowHovered.enableHover())));
       }
    });
  }
  ngOnDestroy(){
    this.triggerChildren.forEach((item) => item.unsubscribe());
    this.subscription.unsubscribe();
  }

}
