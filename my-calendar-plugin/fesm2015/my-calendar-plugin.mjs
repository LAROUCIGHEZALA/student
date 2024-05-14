import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyCalendarPluginService {
    constructor() { }
}
MyCalendarPluginService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyCalendarPluginService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyCalendarPluginComponent {
}
MyCalendarPluginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyCalendarPluginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MyCalendarPluginComponent, selector: "lib-my-calendar-plugin", ngImport: i0, template: `
    <p>
      my-calendar-plugin works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-calendar-plugin', template: `
    <p>
      my-calendar-plugin works!
    </p>
  ` }]
        }] });

class MyCalendarPluginModule {
}
MyCalendarPluginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyCalendarPluginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginModule, declarations: [MyCalendarPluginComponent], exports: [MyCalendarPluginComponent] });
MyCalendarPluginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MyCalendarPluginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyCalendarPluginComponent
                    ],
                    imports: [],
                    exports: [
                        MyCalendarPluginComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-calendar-plugin
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyCalendarPluginComponent, MyCalendarPluginModule, MyCalendarPluginService };
//# sourceMappingURL=my-calendar-plugin.mjs.map
