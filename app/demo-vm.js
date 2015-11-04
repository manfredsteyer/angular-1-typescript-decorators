System.register(['./decorators/Component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var Component_1;
    var DemoVM;
    return {
        setters:[
            function (Component_1_1) {
                Component_1 = Component_1_1;
            }],
        execute: function() {
            DemoVM = (function () {
                function DemoVM($log) {
                    this.ort1 = "Graz";
                    this.ort2 = "Wien";
                    this.now = new Date();
                    $log.debug('Hallo Welt!');
                    this.$log = $log;
                    this.info = "Hallo Welt!";
                }
                DemoVM.prototype.doStuff = function () {
                    this.$log.debug('stuff!!');
                    this.info = 'Manfred war hier!!!';
                };
                DemoVM = __decorate([
                    Component_1.Component({
                        selector: 'demoVM'
                    })
                ], DemoVM);
                return DemoVM;
            })();
            exports_1("DemoVM", DemoVM);
        }
    }
});
//# sourceMappingURL=demo-vm.js.map