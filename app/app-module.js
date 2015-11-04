System.register(['angular'], function(exports_1) {
    var angular;
    var app;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            }],
        execute: function() {
            exports_1("app", app = angular.module('app', []));
        }
    }
});
//# sourceMappingURL=app-module.js.map