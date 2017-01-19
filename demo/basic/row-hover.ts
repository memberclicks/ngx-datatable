import { Component } from '@angular/core';

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
        [rows]="rows"
        [showOnHover]="true">
        <ngx-datatable-row-hover>
          <template ngx-datatable-row-hover-template>
            <button md-raised-button color="primary">Action</button>
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
  `
})
export class RowHoversComponent {

  rows = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
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

}
