import { app } from '../app-module';

export function Pipe(options) {
	
	
	
	return function(target) {
		var obj = new target();
		
		app.filter(options.name, function() { 
			return obj.transform 
		});
		
	}
	
}