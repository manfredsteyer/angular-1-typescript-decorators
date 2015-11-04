System.register(['../app-module'], function(exports_1) {
    var app_module_1;
    function Pipe(options) {
        return function (target) {
            var obj = new target();
            app_module_1.app.filter(options.name, function () { return obj.transform; });
        };
    }
    exports_1("Pipe", Pipe);
    return {
        setters:[
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=Pipe.js.map