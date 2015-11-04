import { app } from '../app-module';

export function Component(options) {
	
	return function(target) {
		
		app.controller(options.selector, target);
		
	}
	
}

/*
// ES7:
@Component({selector: 'xyz'})
class MyCtrl {
	
	
}
// ES6-Gegenstück
Component({selector: 'xyz'})(MyCtrl);
*/