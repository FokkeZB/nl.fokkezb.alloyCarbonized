function Controller() {
    function doClick(e) {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    
    $.__views.index = A$(Carbon.UI.create({"Window": {
        backgroundColor: "white",
        id: "index",
        children: [
        	{
        		"Label": {
			        width: Ti.UI.SIZE,
			        height: Ti.UI.SIZE,
			        color: "#000",
			        text: "Hello, World",
			        id: "label"
        		}
        	}
        ]
    }}));
    $.__views.label = A$(Carbon.UI.find('#label'));
    
    /*
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    }), "Window", null);
    $.__views.label = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    }), "Label", $.__views.index);
    $.__views.index.add($.__views.label);
    */
   
    $.addTopLevelView($.__views.index);
	$.__views.label.on("click", doClick);
   
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, Carbon = Alloy.Carbon, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;