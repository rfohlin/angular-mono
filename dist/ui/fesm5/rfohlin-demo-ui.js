import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UiService = /** @class */ (function () {
    function UiService() {
    }
    UiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    UiService.ctorParameters = function () { return []; };
    /** @nocollapse */ UiService.ngInjectableDef = defineInjectable({ factory: function UiService_Factory() { return new UiService(); }, token: UiService, providedIn: "root" });
    return UiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UiComponent = /** @class */ (function () {
    function UiComponent() {
    }
    /**
     * @return {?}
     */
    UiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ui',
                    template: "\n    <p>\n      ui works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    UiComponent.ctorParameters = function () { return []; };
    return UiComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [UiComponent],
                    exports: [UiComponent]
                },] },
    ];
    return UiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-button',
                    template: "<button>\n  {{title}}\n</button>\n",
                    styles: ["button{display:inline-block;padding:10px 15px;border:none;background:#e7e7e7}button:hover{cursor:pointer;background:#d5d5d5}button.large{font-size:20px;padding:15px 22px;background:orange}"]
                },] },
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        title: [{ type: Input }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [ButtonComponent],
                    declarations: [ButtonComponent]
                },] },
    ];
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    /**
     * @return {?}
     */
    ListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-list',
                    template: "<ul>\n  <li>A list</li>\n  <li>From our</li>\n  <li>npm repo</li>\n</ul>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return []; };
    return ListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [ListComponent],
                    exports: [ListComponent]
                },] },
    ];
    return ListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { UiService, UiComponent, UiModule, ButtonModule, ListModule, ButtonComponent as ɵa, ListComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmZvaGxpbi1kZW1vLXVpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcmZvaGxpbi9kZW1vLXVpL2xpYi91aS5zZXJ2aWNlLnRzIiwibmc6Ly9AcmZvaGxpbi9kZW1vLXVpL2xpYi91aS5jb21wb25lbnQudHMiLCJuZzovL0ByZm9obGluL2RlbW8tdWkvbGliL3VpLm1vZHVsZS50cyIsIm5nOi8vQHJmb2hsaW4vZGVtby11aS9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0ByZm9obGluL2RlbW8tdWkvbGliL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIiwibmc6Ly9AcmZvaGxpbi9kZW1vLXVpL2xpYi9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AcmZvaGxpbi9kZW1vLXVpL2xpYi9saXN0L2xpc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVWlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXVpJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHVpIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBVaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlDb21wb25lbnQgfSBmcm9tICcuL3VpLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVWlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVWlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFVpTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbj5cbiAge3t0aXRsZX19XG48L2J1dHRvbj5cbmAsXG4gIHN0eWxlczogW2BidXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxMHB4IDE1cHg7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDojZTdlN2U3fWJ1dHRvbjpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOiNkNWQ1ZDV9YnV0dG9uLmxhcmdle2ZvbnQtc2l6ZToyMHB4O3BhZGRpbmc6MTVweCAyMnB4O2JhY2tncm91bmQ6b3JhbmdlfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmdcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtCdXR0b25Db21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0JyxcbiAgdGVtcGxhdGU6IGA8dWw+XG4gIDxsaT5BIGxpc3Q8L2xpPlxuICA8bGk+RnJvbSBvdXI8L2xpPlxuICA8bGk+bnBtIHJlcG88L2xpPlxuPC91bD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O29CQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQiw4QkFBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsMENBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7c0JBVkQ7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUMzQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ3ZCOzttQkFSRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsa0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLG9DQUdYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDhMQUE4TCxDQUFDO2lCQUN6TTs7Ozs7d0JBRUUsS0FBSzs7MEJBWFI7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ2hDOzt1QkFWRDs7Ozs7OztBQ0FBO0lBY0U7S0FBaUI7Ozs7SUFFakIsZ0NBQVE7OztJQUFSO0tBQ0M7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLDRFQUtYO29CQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7Ozt3QkFYRDs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDekI7O3FCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=