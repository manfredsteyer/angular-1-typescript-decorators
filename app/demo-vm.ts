import { Component } from './decorators/Component';

@Component({
	selector: 'demoVM'
})
export class DemoVM {
	
	info: string;
	$log : ng.ILogService;
	now: Date;
	ort1 = "Graz";
	ort2 = "Wien";
	
	constructor($log: ng.ILogService) {
		this.now = new Date();
		$log.debug('Hallo Welt!');
		this.$log = $log;
		this.info = "Hallo Welt!";
	}
	
	doStuff() {
		this.$log.debug('stuff!!');
		this.info = 'Manfred war hier!!!';
	}
	
}