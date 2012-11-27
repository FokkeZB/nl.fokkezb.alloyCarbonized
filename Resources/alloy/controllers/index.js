function Controller() {
    function openWindow(e) {
        var test = e.source.id, start = (new Date).getTime();
        titles[test] || (titles[test] = e.source.title);
        var title = titles[test];
        Ti.API.info(test + " " + ((new Date).getTime() - start) + "ms in openWindow");
        var ctrl = Alloy.createController(test, {
            test: test,
            start: start,
            title: title
        });
        Ti.API.info(test + " " + ((new Date).getTime() - start) + "ms after createController");
        var view = ctrl.getView();
        Ti.API.info(test + " " + ((new Date).getTime() - start) + "ms after getView");
        view.open({
            modal: !0
        });
        var speed = (new Date).getTime() - start;
        Ti.API.info(test + " " + speed + "ms after open");
        if (!speeds[test] || speed < speeds[test]) speeds[test] = speed;
        e.source.title = titles[test] + " (" + speeds[test] + "ms)";
        Ti.API.info(test + " " + speeds[test] + "ms fastest");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.original = A$(Ti.UI.createButton({
        top: 75,
        width: 200,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Alloy",
        id: "original"
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.original);
    $.__views.original.on("click", openWindow);
    $.__views.inline = A$(Ti.UI.createButton({
        top: 75,
        width: 200,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Alloy + Inline Carbon",
        id: "inline"
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.inline);
    $.__views.inline.on("click", openWindow);
    $.__views.json = A$(Ti.UI.createButton({
        top: 75,
        width: 200,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Alloy + JSON Carbon",
        id: "json"
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.json);
    $.__views.json.on("click", openWindow);
    _.extend($, $.__views);
    var titles = {}, speeds = {};
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;