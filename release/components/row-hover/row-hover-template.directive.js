"use strict";
var core_1 = require('@angular/core');
var DatatableRowHoverTemplateDirective = (function () {
    function DatatableRowHoverTemplateDirective(template) {
        this.template = template;
    }
    ;
    DatatableRowHoverTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ngx-datatable-row-hover-template]'
                },] },
    ];
    /** @nocollapse */
    DatatableRowHoverTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return DatatableRowHoverTemplateDirective;
}());
exports.DatatableRowHoverTemplateDirective = DatatableRowHoverTemplateDirective;
//# sourceMappingURL=row-hover-template.directive.js.map