import { Component } from '@angular/core';

@Component({
  selector: 'basic-memberclicks-table',
  template: `
    <div>
      <h3>Fluid Row Heights</h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="56"
        [footerHeight]="56"
        [rowHeight]="'auto'">
      </ngx-datatable>
      <md-checkbox></md-checkbox>
    </div>
  `
})
export class BasicMemberclicksComponent {

  rows = [];
  loadingIndicator: boolean = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
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
