System.register(['../app-module'], function(exports_1) {
    var app_module_1;
    function Component(options) {
        return function (target) {
            app_module_1.app.controller(options.selector, target);
        };
    }
    exports_1("Component", Component);
    return {
        setters:[
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
        }
    }
});
/*
// ES7:
@Component({selector: 'xyz'})
class MyCtrl {
    
    
}
// ES6-Gegenstück
Component({selector: 'xyz'})(MyCtrl);
*/ 
//# sourceMappingURL=Component.js.map