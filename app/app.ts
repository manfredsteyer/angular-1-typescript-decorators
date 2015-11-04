import { app } from 'app-module';
import 'demo-vm';
import * as angular from 'angular';
import { Pipe } from './decorators/Pipe';

@Pipe({ name: 'ort' })
class OrtPipe {
	
	transform(value, fmt) {
		
		var long;
		var short;
		
		switch(value) {
			
			case 'Graz':
				short = 'GRZ';
				long = 'Graz, Steiermark, Österreich'
				break;
			case 'Wien':
				short = 'VIE';
				long = 'Wien, Österreich'
				break;
			case 'Gleisdorf':
				short = 'GLE';
				long = 'Gleisdorf, Europa'
				break;
			default:
				short = 'ROM';
				long = 'Rom, Italien'
		}
		
		if (fmt === 'long') {
			return long;
		}
		return short;

	}
	
}

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
angular.element(document).ready(() => {
	angular.bootstrap(document, ['app']);
});