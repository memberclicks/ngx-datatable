"use strict";
var core_1 = require('@angular/core');
var DataTableRowHoverComponent = (function () {
    function DataTableRowHoverComponent() {
        var _this = this;
        this.showOnHover = true;
        this.hoverEnabled = true;
        this.enableMouseEvents = true;
        this.contextObject = {
            parent: {
                disableHover: function () { return _this.hoverEnabled = false; },
                enableHover: function () { return _this.hoverEnabled = true; }
            }
        };
    }
    DataTableRowHoverComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-row-hover',
                    template: "\n    <ng-content></ng-content>\n    <div \n      *ngIf=\"showOnHover\" \n      class=\"datatable-row-hover hover-enabled\" [ngClass]=\"{'hover-enabled' : hoverEnabled}\">\n      <template\n        *ngIf=\"rowHover && rowHover.template\"\n        [ngTemplateOutlet]=\"rowHover.template\"\n        [ngOutletContext]=\"contextObject\">\n      </template>\n    </div>\n  ",
                    host: {
                        class: 'datatable-body-row-hover'
                    }
                },] },
    ];
    /** @nocollapse */
    DataTableRowHoverComponent.ctorParameters = function () { return []; };
    DataTableRowHoverComponent.propDecorators = {
        'rowHover': [{ type: core_1.Input },],
        'showOnHover': [{ type: core_1.Input },],
    };
    return DataTableRowHoverComponent;
}());
exports.DataTableRowHoverComponent = DataTableRowHoverComponent;
//# sourceMappingURL=body-row-hover.component.js.map