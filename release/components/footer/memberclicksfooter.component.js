"use strict";
var core_1 = require('@angular/core');
var DataTableFooterComponent = (function () {
    function DataTableFooterComponent() {
        this.page = new core_1.EventEmitter();
        this.templateContext = {
            parent: {}
        };
        this.templateContext.parent = this;
    }
    Object.defineProperty(DataTableFooterComponent.prototype, "isVisible", {
        get: function () {
            /**
             * Need to check and see if this still works
             */
            return (this.rowCount / this.pageSize) > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableFooterComponent.prototype, "curPage", {
        get: function () {
            //this.offset = isNaN(this.offset)?0:this.offset;
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    DataTableFooterComponent.prototype.changePageSize = function (evt) {
        this.pageSize = +this.pageSize;
        this.page.emit({ pageSize: this.pageSize, page: this.curPage });
    };
    DataTableFooterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-footer',
                    template: "\n    <div\n      [style.height.px]=\"footerHeight\">\n      <div class=\"page-count\">{{rowCount.toLocaleString()}} {{totalMessage}}</div>\n      <div *ngIf=\"!pagerSelect?.template && isVisible\">\n        <select [(ngModel)]=\"pageSize\" (change)=\"changePageSize($event)\">\n          <option *ngFor=\"let t of pageSizes\" [value]=\"t\" [selected]=\"t === (pageSize ? 'selected' : '')\">{{t}}</option>\n        </select>\n      </div>\n      <div *ngIf=\"isVisible && pagerSelect && pagerSelect.template\">\n        <template\n          [ngTemplateOutlet]=\"pagerSelect.template\"\n          [ngOutletContext]=\"templateContext\">\n        </template>\n      </div>\n      <datatable-pager\n      [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (btnchange)=\"page.emit($event)\">\n       </datatable-pager>\n     </div>\n  ",
                    host: {
                        class: 'datatable-footer'
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DataTableFooterComponent.ctorParameters = function () { return []; };
    DataTableFooterComponent.propDecorators = {
        'footerHeight': [{ type: core_1.Input },],
        'rowCount': [{ type: core_1.Input },],
        'pageSize': [{ type: core_1.Input },],
        'pageSizes': [{ type: core_1.Input },],
        'offset': [{ type: core_1.Input },],
        'pagerLeftArrowIcon': [{ type: core_1.Input },],
        'pagerRightArrowIcon': [{ type: core_1.Input },],
        'pagerPreviousIcon': [{ type: core_1.Input },],
        'pagerNextIcon': [{ type: core_1.Input },],
        'totalMessage': [{ type: core_1.Input },],
        'pagerSelect': [{ type: core_1.Input },],
        'page': [{ type: core_1.Output },],
    };
    return DataTableFooterComponent;
}());
exports.DataTableFooterComponent = DataTableFooterComponent;
//# sourceMappingURL=memberclicksfooter.component.js.map