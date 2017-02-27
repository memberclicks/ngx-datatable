import { Component } from '@angular/core';

@Component({
  selector: 'client-paging-demo',
  template: `
    <div>
      <h3>Client-side Paging</h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="[{name:'Name'},{name:'Gender'},{name:'Company'}]"
        [columnMode]="'force'"
        [headerHeight]="56"
        [footerHeight]="56"
        [rowHeight]="'auto'"
        [limit]="10">
        <ngx-datatable-pager-select>
          <template let-parent="parent" ngx-datatable-pager-select-template>
            <select [(ngModel)]="parent.pageSize" (change)="parent.changePageSize($event)">
              <option *ngFor="let t of parent.pageSizes" [value]="t" [selected]="t === (parent.pageSize ? 'selected' : '')">{{t}}</option>
            </select>
            {{curPage}}
          </template>
        </ngx-datatable-pager-select>
      </ngx-datatable>
    </div>
  `
})
export class ClientPagingComponent {

  rows = [];
  size = 10;

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

}
