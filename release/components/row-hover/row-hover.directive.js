"use strict";
var core_1 = require('@angular/core');
var row_hover_template_directive_1 = require('./row-hover-template.directive');
var DatatableRowHoverDirective = (function () {
    function DatatableRowHoverDirective() {
        this.showOnHover = false;
    }
    DatatableRowHoverDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ngx-datatable-row-hover' },] },
    ];
    /** @nocollapse */
    DatatableRowHoverDirective.ctorParameters = function () { return []; };
    DatatableRowHoverDirective.propDecorators = {
        'showOnHover': [{ type: core_1.Input },],
        'template': [{ type: core_1.Input }, { type: core_1.ContentChild, args: [row_hover_template_directive_1.DatatableRowHoverTemplateDirective, { read: core_1.TemplateRef },] },],
    };
    return DatatableRowHoverDirective;
}());
exports.DatatableRowHoverDirective = DatatableRowHoverDirective;
//# sourceMappingURL=row-hover.directive.js.map