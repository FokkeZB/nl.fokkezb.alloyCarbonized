var args = arguments[0] || {};

var test	= args.test;
var start	= args.start;
var title	= args.title;

function closeWindow() {
	$.window.close();
}

$.window.title = title;

Ti.API.info(test + ' ' + ((new Date()).getTime() - start) + 'ms end controller');