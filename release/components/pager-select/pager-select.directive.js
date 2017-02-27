"use strict";
var core_1 = require('@angular/core');
var pager_select_template_directive_1 = require('./pager-select-template.directive');
var DatatablePagerSelectDirective = (function () {
    function DatatablePagerSelectDirective() {
    }
    DatatablePagerSelectDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ngx-datatable-pager-select' },] },
    ];
    /** @nocollapse */
    DatatablePagerSelectDirective.ctorParameters = function () { return []; };
    DatatablePagerSelectDirective.propDecorators = {
        'template': [{ type: core_1.ContentChild, args: [pager_select_template_directive_1.DatatablePagerSelectTemplateDirective, { read: core_1.TemplateRef },] },],
    };
    return DatatablePagerSelectDirective;
}());
exports.DatatablePagerSelectDirective = DatatablePagerSelectDirective;
//# sourceMappingURL=pager-select.directive.js.map