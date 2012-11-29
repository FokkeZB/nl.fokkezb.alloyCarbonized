function Controller() {
    function closeWindow() {
        $.window.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    
	$.__views.window = A$(Carbon.UI.load("/alloy/views/json.json"), "Window", null);
    $.addTopLevelView($.__views.window);
    $.__views.window.on("click", closeWindow);
    
    _.extend($, $.__views);
    var args = arguments[0] || {}, test = args.test, start = args.start, title = args.title;
    $.window.title = title;
    Ti.API.info(test + " " + ((new Date).getTime() - start) + "ms end controller");
    _.extend($, exports);
}

var Alloy = require("alloy"), Carbon = Alloy.Carbon, Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;