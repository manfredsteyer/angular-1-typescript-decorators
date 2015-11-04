System.register(['demo-vm', 'angular', './decorators/Pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var angular, Pipe_1;
    var OrtPipe;
    return {
        setters:[
            function (_1) {},
            function (angular_1) {
                angular = angular_1;
            },
            function (Pipe_1_1) {
                Pipe_1 = Pipe_1_1;
            }],
        execute: function() {
            OrtPipe = (function () {
                function OrtPipe() {
                }
                OrtPipe.prototype.transform = function (value, fmt) {
                    var long;
                    var short;
                    switch (value) {
                        case 'Graz':
                            short = 'GRZ';
                            long = 'Graz, Steiermark, Österreich';
                            break;
                        case 'Wien':
                            short = 'VIE';
                            long = 'Wien, Österreich';
                            break;
                        case 'Gleisdorf':
                            short = 'GLE';
                            long = 'Gleisdorf, Europa';
                            break;
                        default:
                            short = 'ROM';
                            long = 'Rom, Italien';
                    }
                    if (fmt === 'long') {
                        return long;
                    }
                    return short;
                };
                OrtPipe = __decorate([
                    Pipe_1.Pipe({ name: 'ort' })
                ], OrtPipe);
                return OrtPipe;
            })();
            // 'Graz' | ort:'long'
            /*
            app.filter('ort', function($http, $log) {
                
                return function(value, fmt) {
                    
                    
                }
                
            })
            */
            // app.controller('demoVM', DemoVM);
            // ng-app='app'
            // $(function() {})
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['app']);
            });
        }
    }
});
//# sourceMappingURL=app.js.map