(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@rfohlin/demo-ui', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.rfohlin = global.rfohlin || {}, global.rfohlin['demo-ui'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UiService = (function () {
        function UiService() {
        }
        UiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        UiService.ctorParameters = function () { return []; };
        /** @nocollapse */ UiService.ngInjectableDef = i0.defineInjectable({ factory: function UiService_Factory() { return new UiService(); }, token: UiService, providedIn: "root" });
        return UiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UiComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var UiModule = (function () {
        function UiModule() {
        }
        UiModule.decorators = [
            { type: i0.NgModule, args: [{
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
    var ButtonComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'ui-button',
                        template: "<button>\n  {{title}}\n</button>\n",
                        styles: ["button{display:inline-block;padding:10px 15px;border:none;background:#e7e7e7}button:hover{cursor:pointer;background:#d5d5d5}button.large{font-size:20px;padding:15px 22px;background:orange}"]
                    },] },
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            title: [{ type: i0.Input }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonModule = (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
    var ListComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var ListModule = (function () {
        function ListModule() {
        }
        ListModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.UiService = UiService;
    exports.UiComponent = UiComponent;
    exports.UiModule = UiModule;
    exports.ButtonModule = ButtonModule;
    exports.ListModule = ListModule;
    exports.ɵa = ButtonComponent;
    exports.ɵb = ListComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmZvaGxpbi1kZW1vLXVpLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHJmb2hsaW4vZGVtby11aS9saWIvdWkuc2VydmljZS50cyIsIm5nOi8vQHJmb2hsaW4vZGVtby11aS9saWIvdWkuY29tcG9uZW50LnRzIiwibmc6Ly9AcmZvaGxpbi9kZW1vLXVpL2xpYi91aS5tb2R1bGUudHMiLCJuZzovL0ByZm9obGluL2RlbW8tdWkvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AcmZvaGxpbi9kZW1vLXVpL2xpYi9idXR0b24vYnV0dG9uLm1vZHVsZS50cyIsIm5nOi8vQHJmb2hsaW4vZGVtby11aS9saWIvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHJmb2hsaW4vZGVtby11aS9saWIvbGlzdC9saXN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVpU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11aScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB1aSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpQ29tcG9uZW50IH0gZnJvbSAnLi91aS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VpQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1VpQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBVaU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxidXR0b24+XG4gIHt7dGl0bGV9fVxuPC9idXR0b24+XG5gLFxuICBzdHlsZXM6IFtgYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MTBweCAxNXB4O2JvcmRlcjpub25lO2JhY2tncm91bmQ6I2U3ZTdlN31idXR0b246aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDojZDVkNWQ1fWJ1dHRvbi5sYXJnZXtmb250LXNpemU6MjBweDtwYWRkaW5nOjE1cHggMjJweDtiYWNrZ3JvdW5kOm9yYW5nZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nXG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQnV0dG9uQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbQnV0dG9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdCcsXG4gIHRlbXBsYXRlOiBgPHVsPlxuICA8bGk+QSBsaXN0PC9saT5cbiAgPGxpPkZyb20gb3VyPC9saT5cbiAgPGxpPm5wbSByZXBvPC9saT5cbjwvdWw+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiSW5wdXQiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQiw4QkFBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDBDQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OzBCQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQzNCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDdkI7O3VCQVJEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixrQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZELFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLG9DQUdYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLDhMQUE4TCxDQUFDO3FCQUN6TTs7Ozs7NEJBRUVFLFFBQUs7OzhCQVhSOzs7Ozs7O0FDQUE7Ozs7b0JBSUNELFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BFLG1CQUFZO3lCQUNiO3dCQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDMUIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUNoQzs7MkJBVkQ7Ozs7Ozs7QUNBQTtRQWNFO1NBQWlCOzs7O1FBRWpCLGdDQUFROzs7WUFBUjthQUNDOztvQkFmRkgsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsNEVBS1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNiOzs7OzRCQVhEOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BFLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQzt3QkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO3FCQUN6Qjs7eUJBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9