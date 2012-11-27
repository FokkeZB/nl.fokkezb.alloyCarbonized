var titles = {};
var speeds = {};

function openWindow(e) {
	var test	= e.source.id;
	var start	= new Date().getTime();
	
	if (!titles[test]) {
		titles[test] = e.source.title;
	}
	
	var title = titles[test];
	
	Ti.API.info(test + ' ' + ((new Date()).getTime() - start) + 'ms in openWindow');
	
	var ctrl = Alloy.createController(test, {
		test: test,
		start: start,
		title: title
	});
	
	Ti.API.info(test + ' ' + ((new Date()).getTime() - start) + 'ms after createController');
	
	var view = ctrl.getView();
	
	Ti.API.info(test + ' ' + ((new Date()).getTime() - start) + 'ms after getView');
	
	view.open({
		modal: true,
	});
	
	var speed = ((new Date()).getTime() - start);
	
	Ti.API.info(test + ' ' + speed + 'ms after open');
	
	if (!speeds[test] || speed < speeds[test]) {
		speeds[test] = speed;
	}
	
	e.source.title = titles[test] + ' (' + speeds[test] + 'ms)';
	
	Ti.API.info(test + ' ' + speeds[test] + 'ms fastest');
}

$.index.open();