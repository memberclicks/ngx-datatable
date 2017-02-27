import { EventEmitter } from '@angular/core';
export declare class DataTableFooterComponent {
    footerHeight: number;
    rowCount: number;
    pageSize: number;
    pageSizes: number[];
    offset: number;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    totalMessage: string;
    pagerSelect: any;
    page: EventEmitter<any>;
    templateContext: {
        parent: {};
    };
    constructor();
    readonly isVisible: boolean;
    readonly curPage: number;
    changePageSize(evt: any): void;
}
