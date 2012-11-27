function Controller() {
    function closeWindow() {
        $.window.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.window = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "horizontal",
        id: "window"
    }), "Window", null);
    $.addTopLevelView($.__views.window);
    $.__views.window.on("click", closeWindow);
    $.__views.__alloyId1 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId1"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId1);
    $.__views.__alloyId2 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId2"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId2);
    $.__views.__alloyId3 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId3"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId3);
    $.__views.__alloyId4 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId4"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId4);
    $.__views.__alloyId5 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId5"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId5);
    $.__views.__alloyId6 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId6"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId6);
    $.__views.__alloyId7 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId7"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId7);
    $.__views.__alloyId8 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId8"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId8);
    $.__views.__alloyId9 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId9"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId9);
    $.__views.__alloyId10 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId10"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId10);
    $.__views.__alloyId11 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId11"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId11);
    $.__views.__alloyId12 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId12"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId12);
    $.__views.__alloyId13 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId13"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId13);
    $.__views.__alloyId14 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId14"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId14);
    $.__views.__alloyId15 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId15"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId15);
    $.__views.__alloyId16 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId16"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId16);
    $.__views.__alloyId17 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId17"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId17);
    $.__views.__alloyId18 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId18"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId18);
    $.__views.__alloyId19 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId19"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId19);
    $.__views.__alloyId20 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId20"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId20);
    $.__views.__alloyId21 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId21"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId21);
    $.__views.__alloyId22 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId22"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId22);
    $.__views.__alloyId23 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId23"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId23);
    $.__views.__alloyId24 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId24"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId24);
    $.__views.__alloyId25 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId25"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId25);
    $.__views.__alloyId26 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId26"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId26);
    $.__views.__alloyId27 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId27"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId27);
    $.__views.__alloyId28 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId28"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId28);
    $.__views.__alloyId29 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId29"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId29);
    $.__views.__alloyId30 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId30"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId30);
    $.__views.__alloyId31 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId31"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId31);
    $.__views.__alloyId32 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId32"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId32);
    $.__views.__alloyId33 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId33"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId33);
    $.__views.__alloyId34 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId34"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId34);
    $.__views.__alloyId35 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId35"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId35);
    $.__views.__alloyId36 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId36"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId36);
    $.__views.__alloyId37 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId37"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId37);
    $.__views.__alloyId38 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId38"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId38);
    $.__views.__alloyId39 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId39"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId39);
    $.__views.__alloyId40 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId40"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId40);
    $.__views.__alloyId41 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId41"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId41);
    $.__views.__alloyId42 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId42"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId42);
    $.__views.__alloyId43 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId43"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId43);
    $.__views.__alloyId44 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId44"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId44);
    $.__views.__alloyId45 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId45"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId45);
    $.__views.__alloyId46 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId46"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId46);
    $.__views.__alloyId47 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId47"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId47);
    $.__views.__alloyId48 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId48"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId48);
    $.__views.__alloyId49 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId49"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId49);
    $.__views.__alloyId50 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId50"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId50);
    $.__views.__alloyId51 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId51"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId51);
    $.__views.__alloyId52 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId52"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId52);
    $.__views.__alloyId53 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId53"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId53);
    $.__views.__alloyId54 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId54"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId54);
    $.__views.__alloyId55 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId55"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId55);
    $.__views.__alloyId56 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId56"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId56);
    $.__views.__alloyId57 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId57"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId57);
    $.__views.__alloyId58 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId58"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId58);
    $.__views.__alloyId59 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId59"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId59);
    $.__views.__alloyId60 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId60"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId60);
    $.__views.__alloyId61 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId61"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId61);
    $.__views.__alloyId62 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId62"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId62);
    $.__views.__alloyId63 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId63"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId63);
    $.__views.__alloyId64 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId64"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId64);
    $.__views.__alloyId65 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId65"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId65);
    $.__views.__alloyId66 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId66"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId66);
    $.__views.__alloyId67 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId67"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId67);
    $.__views.__alloyId68 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId68"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId68);
    $.__views.__alloyId69 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId69"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId69);
    $.__views.__alloyId70 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId70"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId70);
    $.__views.__alloyId71 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId71"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId71);
    $.__views.__alloyId72 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId72"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId72);
    $.__views.__alloyId73 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId73"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId73);
    $.__views.__alloyId74 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId74"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId74);
    $.__views.__alloyId75 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId75"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId75);
    $.__views.__alloyId76 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId76"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId76);
    $.__views.__alloyId77 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId77"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId77);
    $.__views.__alloyId78 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId78"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId78);
    $.__views.__alloyId79 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId79"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId79);
    $.__views.__alloyId80 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId80"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId80);
    $.__views.__alloyId81 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId81"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId81);
    $.__views.__alloyId82 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId82"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId82);
    $.__views.__alloyId83 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId83"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId83);
    $.__views.__alloyId84 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId84"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId84);
    $.__views.__alloyId85 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId85"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId85);
    $.__views.__alloyId86 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId86"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId86);
    $.__views.__alloyId87 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId87"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId87);
    $.__views.__alloyId88 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId88"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId88);
    $.__views.__alloyId89 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId89"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId89);
    $.__views.__alloyId90 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId90"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId90);
    $.__views.__alloyId91 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId91"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId91);
    $.__views.__alloyId92 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId92"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId92);
    $.__views.__alloyId93 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId93"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId93);
    $.__views.__alloyId94 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId94"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId94);
    $.__views.__alloyId95 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId95"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId95);
    $.__views.__alloyId96 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId96"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId96);
    $.__views.__alloyId97 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId97"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId97);
    $.__views.__alloyId98 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId98"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId98);
    $.__views.__alloyId99 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId99"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId99);
    $.__views.__alloyId100 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId100"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId100);
    $.__views.__alloyId101 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId101"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId101);
    $.__views.__alloyId102 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId102"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId102);
    $.__views.__alloyId103 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId103"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId103);
    $.__views.__alloyId104 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId104"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId104);
    $.__views.__alloyId105 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId105"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId105);
    $.__views.__alloyId106 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId106"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId106);
    $.__views.__alloyId107 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId107"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId107);
    $.__views.__alloyId108 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId108"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId108);
    $.__views.__alloyId109 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId109"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId109);
    $.__views.__alloyId110 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId110"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId110);
    $.__views.__alloyId111 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId111"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId111);
    $.__views.__alloyId112 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId112"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId112);
    $.__views.__alloyId113 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId113"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId113);
    $.__views.__alloyId114 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId114"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId114);
    $.__views.__alloyId115 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId115"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId115);
    $.__views.__alloyId116 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId116"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId116);
    $.__views.__alloyId117 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId117"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId117);
    $.__views.__alloyId118 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId118"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId118);
    $.__views.__alloyId119 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId119"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId119);
    $.__views.__alloyId120 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId120"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId120);
    $.__views.__alloyId121 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId121"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId121);
    $.__views.__alloyId122 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId122"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId122);
    $.__views.__alloyId123 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId123"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId123);
    $.__views.__alloyId124 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId124"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId124);
    $.__views.__alloyId125 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId125"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId125);
    $.__views.__alloyId126 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId126"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId126);
    $.__views.__alloyId127 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId127"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId127);
    $.__views.__alloyId128 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId128"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId128);
    $.__views.__alloyId129 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId129"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId129);
    $.__views.__alloyId130 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId130"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId130);
    $.__views.__alloyId131 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId131"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId131);
    $.__views.__alloyId132 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId132"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId132);
    $.__views.__alloyId133 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId133"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId133);
    $.__views.__alloyId134 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId134"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId134);
    $.__views.__alloyId135 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId135"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId135);
    $.__views.__alloyId136 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId136"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId136);
    $.__views.__alloyId137 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId137"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId137);
    $.__views.__alloyId138 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId138"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId138);
    $.__views.__alloyId139 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId139"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId139);
    $.__views.__alloyId140 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId140"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId140);
    $.__views.__alloyId141 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId141"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId141);
    $.__views.__alloyId142 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId142"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId142);
    $.__views.__alloyId143 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId143"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId143);
    $.__views.__alloyId144 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId144"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId144);
    $.__views.__alloyId145 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId145"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId145);
    $.__views.__alloyId146 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId146"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId146);
    $.__views.__alloyId147 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId147"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId147);
    $.__views.__alloyId148 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId148"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId148);
    $.__views.__alloyId149 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId149"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId149);
    $.__views.__alloyId150 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId150"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId150);
    $.__views.__alloyId151 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId151"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId151);
    $.__views.__alloyId152 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId152"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId152);
    $.__views.__alloyId153 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId153"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId153);
    $.__views.__alloyId154 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId154"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId154);
    $.__views.__alloyId155 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId155"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId155);
    $.__views.__alloyId156 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId156"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId156);
    $.__views.__alloyId157 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId157"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId157);
    $.__views.__alloyId158 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId158"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId158);
    $.__views.__alloyId159 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId159"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId159);
    $.__views.__alloyId160 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId160"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId160);
    $.__views.__alloyId161 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId161"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId161);
    $.__views.__alloyId162 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId162"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId162);
    $.__views.__alloyId163 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId163"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId163);
    $.__views.__alloyId164 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId164"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId164);
    $.__views.__alloyId165 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId165"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId165);
    $.__views.__alloyId166 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId166"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId166);
    $.__views.__alloyId167 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId167"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId167);
    $.__views.__alloyId168 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId168"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId168);
    $.__views.__alloyId169 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId169"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId169);
    $.__views.__alloyId170 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId170"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId170);
    $.__views.__alloyId171 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId171"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId171);
    $.__views.__alloyId172 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId172"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId172);
    $.__views.__alloyId173 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId173"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId173);
    $.__views.__alloyId174 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId174"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId174);
    $.__views.__alloyId175 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId175"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId175);
    $.__views.__alloyId176 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId176"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId176);
    $.__views.__alloyId177 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId177"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId177);
    $.__views.__alloyId178 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId178"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId178);
    $.__views.__alloyId179 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId179"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId179);
    $.__views.__alloyId180 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId180"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId180);
    $.__views.__alloyId181 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId181"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId181);
    $.__views.__alloyId182 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId182"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId182);
    $.__views.__alloyId183 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId183"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId183);
    $.__views.__alloyId184 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId184"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId184);
    $.__views.__alloyId185 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId185"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId185);
    $.__views.__alloyId186 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId186"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId186);
    $.__views.__alloyId187 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId187"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId187);
    $.__views.__alloyId188 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId188"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId188);
    $.__views.__alloyId189 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId189"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId189);
    $.__views.__alloyId190 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId190"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId190);
    $.__views.__alloyId191 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId191"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId191);
    $.__views.__alloyId192 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId192"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId192);
    $.__views.__alloyId193 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId193"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId193);
    $.__views.__alloyId194 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId194"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId194);
    $.__views.__alloyId195 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId195"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId195);
    $.__views.__alloyId196 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId196"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId196);
    $.__views.__alloyId197 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId197"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId197);
    $.__views.__alloyId198 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId198"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId198);
    $.__views.__alloyId199 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId199"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId199);
    $.__views.__alloyId200 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId200"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId200);
    $.__views.__alloyId201 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId201"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId201);
    $.__views.__alloyId202 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId202"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId202);
    $.__views.__alloyId203 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId203"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId203);
    $.__views.__alloyId204 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId204"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId204);
    $.__views.__alloyId205 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId205"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId205);
    $.__views.__alloyId206 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId206"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId206);
    $.__views.__alloyId207 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId207"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId207);
    $.__views.__alloyId208 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId208"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId208);
    $.__views.__alloyId209 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId209"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId209);
    $.__views.__alloyId210 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId210"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId210);
    $.__views.__alloyId211 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId211"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId211);
    $.__views.__alloyId212 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId212"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId212);
    $.__views.__alloyId213 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId213"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId213);
    $.__views.__alloyId214 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId214"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId214);
    $.__views.__alloyId215 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId215"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId215);
    $.__views.__alloyId216 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId216"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId216);
    $.__views.__alloyId217 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId217"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId217);
    $.__views.__alloyId218 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId218"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId218);
    $.__views.__alloyId219 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId219"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId219);
    $.__views.__alloyId220 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId220"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId220);
    $.__views.__alloyId221 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId221"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId221);
    $.__views.__alloyId222 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId222"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId222);
    $.__views.__alloyId223 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId223"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId223);
    $.__views.__alloyId224 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId224"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId224);
    $.__views.__alloyId225 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId225"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId225);
    $.__views.__alloyId226 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId226"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId226);
    $.__views.__alloyId227 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId227"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId227);
    $.__views.__alloyId228 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId228"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId228);
    $.__views.__alloyId229 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId229"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId229);
    $.__views.__alloyId230 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId230"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId230);
    $.__views.__alloyId231 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId231"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId231);
    $.__views.__alloyId232 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId232"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId232);
    $.__views.__alloyId233 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId233"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId233);
    $.__views.__alloyId234 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId234"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId234);
    $.__views.__alloyId235 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId235"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId235);
    $.__views.__alloyId236 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId236"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId236);
    $.__views.__alloyId237 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId237"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId237);
    $.__views.__alloyId238 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId238"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId238);
    $.__views.__alloyId239 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId239"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId239);
    $.__views.__alloyId240 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId240"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId240);
    $.__views.__alloyId241 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId241"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId241);
    $.__views.__alloyId242 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId242"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId242);
    $.__views.__alloyId243 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId243"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId243);
    $.__views.__alloyId244 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId244"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId244);
    $.__views.__alloyId245 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId245"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId245);
    $.__views.__alloyId246 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId246"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId246);
    $.__views.__alloyId247 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId247"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId247);
    $.__views.__alloyId248 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId248"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId248);
    $.__views.__alloyId249 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId249"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId249);
    $.__views.__alloyId250 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId250"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId250);
    $.__views.__alloyId251 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId251"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId251);
    $.__views.__alloyId252 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId252"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId252);
    $.__views.__alloyId253 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId253"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId253);
    $.__views.__alloyId254 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId254"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId254);
    $.__views.__alloyId255 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId255"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId255);
    $.__views.__alloyId256 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId256"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId256);
    $.__views.__alloyId257 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId257"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId257);
    $.__views.__alloyId258 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId258"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId258);
    $.__views.__alloyId259 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId259"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId259);
    $.__views.__alloyId260 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId260"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId260);
    $.__views.__alloyId261 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId261"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId261);
    $.__views.__alloyId262 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId262"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId262);
    $.__views.__alloyId263 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId263"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId263);
    $.__views.__alloyId264 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId264"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId264);
    $.__views.__alloyId265 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId265"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId265);
    $.__views.__alloyId266 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId266"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId266);
    $.__views.__alloyId267 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId267"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId267);
    $.__views.__alloyId268 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId268"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId268);
    $.__views.__alloyId269 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId269"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId269);
    $.__views.__alloyId270 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId270"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId270);
    $.__views.__alloyId271 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId271"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId271);
    $.__views.__alloyId272 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId272"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId272);
    $.__views.__alloyId273 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId273"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId273);
    $.__views.__alloyId274 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId274"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId274);
    $.__views.__alloyId275 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId275"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId275);
    $.__views.__alloyId276 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId276"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId276);
    $.__views.__alloyId277 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId277"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId277);
    $.__views.__alloyId278 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId278"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId278);
    $.__views.__alloyId279 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId279"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId279);
    $.__views.__alloyId280 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId280"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId280);
    $.__views.__alloyId281 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId281"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId281);
    $.__views.__alloyId282 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId282"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId282);
    $.__views.__alloyId283 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId283"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId283);
    $.__views.__alloyId284 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId284"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId284);
    $.__views.__alloyId285 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId285"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId285);
    $.__views.__alloyId286 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId286"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId286);
    $.__views.__alloyId287 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId287"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId287);
    $.__views.__alloyId288 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId288"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId288);
    $.__views.__alloyId289 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId289"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId289);
    $.__views.__alloyId290 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId290"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId290);
    $.__views.__alloyId291 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId291"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId291);
    $.__views.__alloyId292 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId292"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId292);
    $.__views.__alloyId293 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId293"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId293);
    $.__views.__alloyId294 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId294"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId294);
    $.__views.__alloyId295 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId295"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId295);
    $.__views.__alloyId296 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId296"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId296);
    $.__views.__alloyId297 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId297"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId297);
    $.__views.__alloyId298 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId298"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId298);
    $.__views.__alloyId299 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId299"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId299);
    $.__views.__alloyId300 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId300"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId300);
    $.__views.__alloyId301 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId301"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId301);
    $.__views.__alloyId302 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId302"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId302);
    $.__views.__alloyId303 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId303"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId303);
    $.__views.__alloyId304 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId304"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId304);
    $.__views.__alloyId305 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId305"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId305);
    $.__views.__alloyId306 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId306"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId306);
    $.__views.__alloyId307 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId307"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId307);
    $.__views.__alloyId308 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId308"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId308);
    $.__views.__alloyId309 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId309"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId309);
    $.__views.__alloyId310 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId310"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId310);
    $.__views.__alloyId311 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId311"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId311);
    $.__views.__alloyId312 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId312"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId312);
    $.__views.__alloyId313 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId313"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId313);
    $.__views.__alloyId314 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId314"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId314);
    $.__views.__alloyId315 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId315"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId315);
    $.__views.__alloyId316 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId316"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId316);
    $.__views.__alloyId317 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId317"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId317);
    $.__views.__alloyId318 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId318"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId318);
    $.__views.__alloyId319 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId319"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId319);
    $.__views.__alloyId320 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId320"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId320);
    $.__views.__alloyId321 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId321"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId321);
    $.__views.__alloyId322 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId322"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId322);
    $.__views.__alloyId323 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId323"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId323);
    $.__views.__alloyId324 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId324"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId324);
    $.__views.__alloyId325 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId325"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId325);
    $.__views.__alloyId326 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId326"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId326);
    $.__views.__alloyId327 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId327"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId327);
    $.__views.__alloyId328 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId328"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId328);
    $.__views.__alloyId329 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId329"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId329);
    $.__views.__alloyId330 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId330"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId330);
    $.__views.__alloyId331 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId331"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId331);
    $.__views.__alloyId332 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId332"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId332);
    $.__views.__alloyId333 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId333"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId333);
    $.__views.__alloyId334 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId334"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId334);
    $.__views.__alloyId335 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId335"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId335);
    $.__views.__alloyId336 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId336"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId336);
    $.__views.__alloyId337 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId337"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId337);
    $.__views.__alloyId338 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId338"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId338);
    $.__views.__alloyId339 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId339"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId339);
    $.__views.__alloyId340 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId340"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId340);
    $.__views.__alloyId341 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId341"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId341);
    $.__views.__alloyId342 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId342"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId342);
    $.__views.__alloyId343 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId343"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId343);
    $.__views.__alloyId344 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId344"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId344);
    $.__views.__alloyId345 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId345"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId345);
    $.__views.__alloyId346 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId346"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId346);
    $.__views.__alloyId347 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId347"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId347);
    $.__views.__alloyId348 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId348"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId348);
    $.__views.__alloyId349 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId349"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId349);
    $.__views.__alloyId350 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId350"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId350);
    $.__views.__alloyId351 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId351"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId351);
    $.__views.__alloyId352 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId352"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId352);
    $.__views.__alloyId353 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId353"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId353);
    $.__views.__alloyId354 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId354"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId354);
    $.__views.__alloyId355 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId355"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId355);
    $.__views.__alloyId356 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId356"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId356);
    $.__views.__alloyId357 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId357"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId357);
    $.__views.__alloyId358 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId358"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId358);
    $.__views.__alloyId359 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId359"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId359);
    $.__views.__alloyId360 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId360"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId360);
    $.__views.__alloyId361 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId361"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId361);
    $.__views.__alloyId362 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId362"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId362);
    $.__views.__alloyId363 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId363"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId363);
    $.__views.__alloyId364 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId364"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId364);
    $.__views.__alloyId365 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId365"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId365);
    $.__views.__alloyId366 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId366"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId366);
    $.__views.__alloyId367 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId367"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId367);
    $.__views.__alloyId368 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId368"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId368);
    $.__views.__alloyId369 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId369"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId369);
    $.__views.__alloyId370 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId370"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId370);
    $.__views.__alloyId371 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId371"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId371);
    $.__views.__alloyId372 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId372"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId372);
    $.__views.__alloyId373 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId373"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId373);
    $.__views.__alloyId374 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId374"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId374);
    $.__views.__alloyId375 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId375"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId375);
    $.__views.__alloyId376 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId376"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId376);
    $.__views.__alloyId377 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId377"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId377);
    $.__views.__alloyId378 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId378"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId378);
    $.__views.__alloyId379 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId379"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId379);
    $.__views.__alloyId380 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId380"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId380);
    $.__views.__alloyId381 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId381"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId381);
    $.__views.__alloyId382 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId382"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId382);
    $.__views.__alloyId383 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId383"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId383);
    $.__views.__alloyId384 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId384"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId384);
    $.__views.__alloyId385 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId385"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId385);
    $.__views.__alloyId386 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId386"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId386);
    $.__views.__alloyId387 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId387"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId387);
    $.__views.__alloyId388 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId388"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId388);
    $.__views.__alloyId389 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId389"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId389);
    $.__views.__alloyId390 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId390"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId390);
    $.__views.__alloyId391 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId391"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId391);
    $.__views.__alloyId392 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId392"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId392);
    $.__views.__alloyId393 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId393"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId393);
    $.__views.__alloyId394 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId394"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId394);
    $.__views.__alloyId395 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId395"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId395);
    $.__views.__alloyId396 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId396"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId396);
    $.__views.__alloyId397 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId397"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId397);
    $.__views.__alloyId398 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId398"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId398);
    $.__views.__alloyId399 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId399"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId399);
    $.__views.__alloyId400 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId400"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId400);
    $.__views.__alloyId401 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId401"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId401);
    $.__views.__alloyId402 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId402"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId402);
    $.__views.__alloyId403 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId403"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId403);
    $.__views.__alloyId404 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId404"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId404);
    $.__views.__alloyId405 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId405"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId405);
    $.__views.__alloyId406 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId406"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId406);
    $.__views.__alloyId407 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId407"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId407);
    $.__views.__alloyId408 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId408"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId408);
    $.__views.__alloyId409 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId409"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId409);
    $.__views.__alloyId410 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId410"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId410);
    $.__views.__alloyId411 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId411"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId411);
    $.__views.__alloyId412 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId412"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId412);
    $.__views.__alloyId413 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId413"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId413);
    $.__views.__alloyId414 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId414"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId414);
    $.__views.__alloyId415 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId415"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId415);
    $.__views.__alloyId416 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId416"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId416);
    $.__views.__alloyId417 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId417"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId417);
    $.__views.__alloyId418 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId418"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId418);
    $.__views.__alloyId419 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId419"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId419);
    $.__views.__alloyId420 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId420"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId420);
    $.__views.__alloyId421 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId421"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId421);
    $.__views.__alloyId422 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId422"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId422);
    $.__views.__alloyId423 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId423"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId423);
    $.__views.__alloyId424 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId424"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId424);
    $.__views.__alloyId425 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId425"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId425);
    $.__views.__alloyId426 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId426"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId426);
    $.__views.__alloyId427 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId427"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId427);
    $.__views.__alloyId428 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId428"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId428);
    $.__views.__alloyId429 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId429"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId429);
    $.__views.__alloyId430 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId430"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId430);
    $.__views.__alloyId431 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId431"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId431);
    $.__views.__alloyId432 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId432"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId432);
    $.__views.__alloyId433 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId433"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId433);
    $.__views.__alloyId434 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId434"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId434);
    $.__views.__alloyId435 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId435"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId435);
    $.__views.__alloyId436 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId436"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId436);
    $.__views.__alloyId437 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId437"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId437);
    $.__views.__alloyId438 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId438"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId438);
    $.__views.__alloyId439 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId439"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId439);
    $.__views.__alloyId440 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId440"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId440);
    $.__views.__alloyId441 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId441"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId441);
    $.__views.__alloyId442 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId442"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId442);
    $.__views.__alloyId443 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId443"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId443);
    $.__views.__alloyId444 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId444"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId444);
    $.__views.__alloyId445 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId445"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId445);
    $.__views.__alloyId446 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId446"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId446);
    $.__views.__alloyId447 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId447"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId447);
    $.__views.__alloyId448 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId448"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId448);
    $.__views.__alloyId449 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId449"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId449);
    $.__views.__alloyId450 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId450"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId450);
    $.__views.__alloyId451 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId451"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId451);
    $.__views.__alloyId452 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId452"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId452);
    $.__views.__alloyId453 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId453"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId453);
    $.__views.__alloyId454 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId454"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId454);
    $.__views.__alloyId455 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId455"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId455);
    $.__views.__alloyId456 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId456"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId456);
    $.__views.__alloyId457 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId457"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId457);
    $.__views.__alloyId458 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId458"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId458);
    $.__views.__alloyId459 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId459"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId459);
    $.__views.__alloyId460 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId460"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId460);
    $.__views.__alloyId461 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId461"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId461);
    $.__views.__alloyId462 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId462"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId462);
    $.__views.__alloyId463 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId463"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId463);
    $.__views.__alloyId464 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId464"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId464);
    $.__views.__alloyId465 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId465"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId465);
    $.__views.__alloyId466 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId466"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId466);
    $.__views.__alloyId467 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId467"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId467);
    $.__views.__alloyId468 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId468"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId468);
    $.__views.__alloyId469 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId469"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId469);
    $.__views.__alloyId470 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId470"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId470);
    $.__views.__alloyId471 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId471"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId471);
    $.__views.__alloyId472 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId472"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId472);
    $.__views.__alloyId473 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId473"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId473);
    $.__views.__alloyId474 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId474"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId474);
    $.__views.__alloyId475 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId475"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId475);
    $.__views.__alloyId476 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId476"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId476);
    $.__views.__alloyId477 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId477"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId477);
    $.__views.__alloyId478 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId478"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId478);
    $.__views.__alloyId479 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId479"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId479);
    $.__views.__alloyId480 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId480"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId480);
    $.__views.__alloyId481 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId481"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId481);
    $.__views.__alloyId482 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId482"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId482);
    $.__views.__alloyId483 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId483"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId483);
    $.__views.__alloyId484 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId484"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId484);
    $.__views.__alloyId485 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId485"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId485);
    $.__views.__alloyId486 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId486"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId486);
    $.__views.__alloyId487 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId487"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId487);
    $.__views.__alloyId488 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId488"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId488);
    $.__views.__alloyId489 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId489"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId489);
    $.__views.__alloyId490 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId490"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId490);
    $.__views.__alloyId491 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId491"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId491);
    $.__views.__alloyId492 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId492"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId492);
    $.__views.__alloyId493 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId493"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId493);
    $.__views.__alloyId494 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId494"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId494);
    $.__views.__alloyId495 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId495"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId495);
    $.__views.__alloyId496 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId496"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId496);
    $.__views.__alloyId497 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId497"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId497);
    $.__views.__alloyId498 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId498"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId498);
    $.__views.__alloyId499 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId499"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId499);
    $.__views.__alloyId500 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId500"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId500);
    $.__views.__alloyId501 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId501"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId501);
    $.__views.__alloyId502 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId502"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId502);
    $.__views.__alloyId503 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId503"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId503);
    $.__views.__alloyId504 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId504"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId504);
    $.__views.__alloyId505 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId505"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId505);
    $.__views.__alloyId506 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId506"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId506);
    $.__views.__alloyId507 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId507"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId507);
    $.__views.__alloyId508 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId508"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId508);
    $.__views.__alloyId509 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId509"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId509);
    $.__views.__alloyId510 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId510"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId510);
    $.__views.__alloyId511 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId511"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId511);
    $.__views.__alloyId512 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId512"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId512);
    $.__views.__alloyId513 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId513"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId513);
    $.__views.__alloyId514 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId514"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId514);
    $.__views.__alloyId515 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId515"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId515);
    $.__views.__alloyId516 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId516"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId516);
    $.__views.__alloyId517 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId517"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId517);
    $.__views.__alloyId518 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId518"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId518);
    $.__views.__alloyId519 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId519"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId519);
    $.__views.__alloyId520 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId520"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId520);
    $.__views.__alloyId521 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId521"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId521);
    $.__views.__alloyId522 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId522"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId522);
    $.__views.__alloyId523 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId523"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId523);
    $.__views.__alloyId524 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId524"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId524);
    $.__views.__alloyId525 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId525"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId525);
    $.__views.__alloyId526 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId526"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId526);
    $.__views.__alloyId527 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId527"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId527);
    $.__views.__alloyId528 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId528"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId528);
    $.__views.__alloyId529 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId529"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId529);
    $.__views.__alloyId530 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId530"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId530);
    $.__views.__alloyId531 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId531"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId531);
    $.__views.__alloyId532 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId532"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId532);
    $.__views.__alloyId533 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId533"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId533);
    $.__views.__alloyId534 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId534"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId534);
    $.__views.__alloyId535 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId535"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId535);
    $.__views.__alloyId536 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId536"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId536);
    $.__views.__alloyId537 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId537"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId537);
    $.__views.__alloyId538 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId538"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId538);
    $.__views.__alloyId539 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId539"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId539);
    $.__views.__alloyId540 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId540"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId540);
    $.__views.__alloyId541 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId541"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId541);
    $.__views.__alloyId542 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId542"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId542);
    $.__views.__alloyId543 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId543"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId543);
    $.__views.__alloyId544 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId544"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId544);
    $.__views.__alloyId545 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId545"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId545);
    $.__views.__alloyId546 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId546"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId546);
    $.__views.__alloyId547 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId547"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId547);
    $.__views.__alloyId548 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId548"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId548);
    $.__views.__alloyId549 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId549"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId549);
    $.__views.__alloyId550 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId550"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId550);
    $.__views.__alloyId551 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId551"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId551);
    $.__views.__alloyId552 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId552"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId552);
    $.__views.__alloyId553 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId553"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId553);
    $.__views.__alloyId554 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId554"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId554);
    $.__views.__alloyId555 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId555"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId555);
    $.__views.__alloyId556 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId556"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId556);
    $.__views.__alloyId557 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId557"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId557);
    $.__views.__alloyId558 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId558"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId558);
    $.__views.__alloyId559 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId559"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId559);
    $.__views.__alloyId560 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId560"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId560);
    $.__views.__alloyId561 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId561"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId561);
    $.__views.__alloyId562 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId562"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId562);
    $.__views.__alloyId563 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId563"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId563);
    $.__views.__alloyId564 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId564"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId564);
    $.__views.__alloyId565 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId565"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId565);
    $.__views.__alloyId566 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId566"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId566);
    $.__views.__alloyId567 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId567"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId567);
    $.__views.__alloyId568 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId568"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId568);
    $.__views.__alloyId569 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId569"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId569);
    $.__views.__alloyId570 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId570"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId570);
    $.__views.__alloyId571 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId571"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId571);
    $.__views.__alloyId572 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId572"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId572);
    $.__views.__alloyId573 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId573"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId573);
    $.__views.__alloyId574 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId574"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId574);
    $.__views.__alloyId575 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId575"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId575);
    $.__views.__alloyId576 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId576"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId576);
    $.__views.__alloyId577 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId577"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId577);
    $.__views.__alloyId578 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId578"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId578);
    $.__views.__alloyId579 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId579"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId579);
    $.__views.__alloyId580 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId580"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId580);
    $.__views.__alloyId581 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId581"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId581);
    $.__views.__alloyId582 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId582"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId582);
    $.__views.__alloyId583 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId583"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId583);
    $.__views.__alloyId584 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId584"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId584);
    $.__views.__alloyId585 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId585"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId585);
    $.__views.__alloyId586 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId586"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId586);
    $.__views.__alloyId587 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId587"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId587);
    $.__views.__alloyId588 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId588"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId588);
    $.__views.__alloyId589 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId589"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId589);
    $.__views.__alloyId590 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId590"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId590);
    $.__views.__alloyId591 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId591"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId591);
    $.__views.__alloyId592 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId592"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId592);
    $.__views.__alloyId593 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId593"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId593);
    $.__views.__alloyId594 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId594"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId594);
    $.__views.__alloyId595 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId595"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId595);
    $.__views.__alloyId596 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId596"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId596);
    $.__views.__alloyId597 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId597"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId597);
    $.__views.__alloyId598 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId598"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId598);
    $.__views.__alloyId599 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId599"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId599);
    $.__views.__alloyId600 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId600"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId600);
    $.__views.__alloyId601 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId601"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId601);
    $.__views.__alloyId602 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId602"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId602);
    $.__views.__alloyId603 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId603"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId603);
    $.__views.__alloyId604 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId604"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId604);
    $.__views.__alloyId605 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId605"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId605);
    $.__views.__alloyId606 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId606"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId606);
    $.__views.__alloyId607 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId607"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId607);
    $.__views.__alloyId608 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId608"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId608);
    $.__views.__alloyId609 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId609"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId609);
    $.__views.__alloyId610 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId610"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId610);
    $.__views.__alloyId611 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId611"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId611);
    $.__views.__alloyId612 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId612"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId612);
    $.__views.__alloyId613 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId613"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId613);
    $.__views.__alloyId614 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId614"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId614);
    $.__views.__alloyId615 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId615"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId615);
    $.__views.__alloyId616 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId616"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId616);
    $.__views.__alloyId617 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId617"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId617);
    $.__views.__alloyId618 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId618"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId618);
    $.__views.__alloyId619 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId619"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId619);
    $.__views.__alloyId620 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId620"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId620);
    $.__views.__alloyId621 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId621"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId621);
    $.__views.__alloyId622 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId622"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId622);
    $.__views.__alloyId623 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId623"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId623);
    $.__views.__alloyId624 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId624"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId624);
    $.__views.__alloyId625 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId625"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId625);
    $.__views.__alloyId626 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId626"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId626);
    $.__views.__alloyId627 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId627"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId627);
    $.__views.__alloyId628 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId628"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId628);
    $.__views.__alloyId629 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId629"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId629);
    $.__views.__alloyId630 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId630"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId630);
    $.__views.__alloyId631 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId631"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId631);
    $.__views.__alloyId632 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId632"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId632);
    $.__views.__alloyId633 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId633"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId633);
    $.__views.__alloyId634 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId634"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId634);
    $.__views.__alloyId635 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId635"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId635);
    $.__views.__alloyId636 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId636"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId636);
    $.__views.__alloyId637 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId637"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId637);
    $.__views.__alloyId638 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId638"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId638);
    $.__views.__alloyId639 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId639"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId639);
    $.__views.__alloyId640 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId640"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId640);
    $.__views.__alloyId641 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId641"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId641);
    $.__views.__alloyId642 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId642"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId642);
    $.__views.__alloyId643 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId643"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId643);
    $.__views.__alloyId644 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId644"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId644);
    $.__views.__alloyId645 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId645"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId645);
    $.__views.__alloyId646 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId646"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId646);
    $.__views.__alloyId647 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId647"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId647);
    $.__views.__alloyId648 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId648"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId648);
    $.__views.__alloyId649 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId649"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId649);
    $.__views.__alloyId650 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId650"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId650);
    $.__views.__alloyId651 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId651"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId651);
    $.__views.__alloyId652 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId652"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId652);
    $.__views.__alloyId653 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId653"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId653);
    $.__views.__alloyId654 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId654"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId654);
    $.__views.__alloyId655 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId655"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId655);
    $.__views.__alloyId656 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId656"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId656);
    $.__views.__alloyId657 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId657"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId657);
    $.__views.__alloyId658 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId658"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId658);
    $.__views.__alloyId659 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId659"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId659);
    $.__views.__alloyId660 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId660"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId660);
    $.__views.__alloyId661 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId661"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId661);
    $.__views.__alloyId662 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId662"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId662);
    $.__views.__alloyId663 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId663"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId663);
    $.__views.__alloyId664 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId664"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId664);
    $.__views.__alloyId665 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId665"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId665);
    $.__views.__alloyId666 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId666"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId666);
    $.__views.__alloyId667 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId667"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId667);
    $.__views.__alloyId668 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId668"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId668);
    $.__views.__alloyId669 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId669"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId669);
    $.__views.__alloyId670 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId670"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId670);
    $.__views.__alloyId671 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId671"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId671);
    $.__views.__alloyId672 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId672"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId672);
    $.__views.__alloyId673 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId673"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId673);
    $.__views.__alloyId674 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId674"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId674);
    $.__views.__alloyId675 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId675"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId675);
    $.__views.__alloyId676 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId676"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId676);
    $.__views.__alloyId677 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId677"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId677);
    $.__views.__alloyId678 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId678"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId678);
    $.__views.__alloyId679 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId679"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId679);
    $.__views.__alloyId680 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId680"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId680);
    $.__views.__alloyId681 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId681"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId681);
    $.__views.__alloyId682 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId682"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId682);
    $.__views.__alloyId683 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId683"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId683);
    $.__views.__alloyId684 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId684"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId684);
    $.__views.__alloyId685 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId685"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId685);
    $.__views.__alloyId686 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId686"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId686);
    $.__views.__alloyId687 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId687"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId687);
    $.__views.__alloyId688 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId688"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId688);
    $.__views.__alloyId689 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId689"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId689);
    $.__views.__alloyId690 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId690"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId690);
    $.__views.__alloyId691 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId691"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId691);
    $.__views.__alloyId692 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId692"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId692);
    $.__views.__alloyId693 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId693"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId693);
    $.__views.__alloyId694 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId694"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId694);
    $.__views.__alloyId695 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId695"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId695);
    $.__views.__alloyId696 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId696"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId696);
    $.__views.__alloyId697 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId697"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId697);
    $.__views.__alloyId698 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId698"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId698);
    $.__views.__alloyId699 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId699"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId699);
    $.__views.__alloyId700 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId700"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId700);
    $.__views.__alloyId701 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId701"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId701);
    $.__views.__alloyId702 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId702"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId702);
    $.__views.__alloyId703 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId703"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId703);
    $.__views.__alloyId704 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId704"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId704);
    $.__views.__alloyId705 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId705"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId705);
    $.__views.__alloyId706 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId706"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId706);
    $.__views.__alloyId707 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId707"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId707);
    $.__views.__alloyId708 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId708"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId708);
    $.__views.__alloyId709 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId709"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId709);
    $.__views.__alloyId710 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId710"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId710);
    $.__views.__alloyId711 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId711"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId711);
    $.__views.__alloyId712 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId712"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId712);
    $.__views.__alloyId713 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId713"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId713);
    $.__views.__alloyId714 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId714"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId714);
    $.__views.__alloyId715 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId715"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId715);
    $.__views.__alloyId716 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId716"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId716);
    $.__views.__alloyId717 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId717"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId717);
    $.__views.__alloyId718 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId718"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId718);
    $.__views.__alloyId719 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId719"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId719);
    $.__views.__alloyId720 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId720"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId720);
    $.__views.__alloyId721 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId721"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId721);
    $.__views.__alloyId722 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId722"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId722);
    $.__views.__alloyId723 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId723"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId723);
    $.__views.__alloyId724 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId724"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId724);
    $.__views.__alloyId725 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId725"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId725);
    $.__views.__alloyId726 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId726"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId726);
    $.__views.__alloyId727 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId727"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId727);
    $.__views.__alloyId728 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId728"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId728);
    $.__views.__alloyId729 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId729"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId729);
    $.__views.__alloyId730 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId730"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId730);
    $.__views.__alloyId731 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId731"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId731);
    $.__views.__alloyId732 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId732"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId732);
    $.__views.__alloyId733 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId733"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId733);
    $.__views.__alloyId734 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId734"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId734);
    $.__views.__alloyId735 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId735"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId735);
    $.__views.__alloyId736 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId736"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId736);
    $.__views.__alloyId737 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId737"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId737);
    $.__views.__alloyId738 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId738"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId738);
    $.__views.__alloyId739 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId739"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId739);
    $.__views.__alloyId740 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId740"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId740);
    $.__views.__alloyId741 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId741"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId741);
    $.__views.__alloyId742 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId742"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId742);
    $.__views.__alloyId743 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId743"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId743);
    $.__views.__alloyId744 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId744"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId744);
    $.__views.__alloyId745 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId745"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId745);
    $.__views.__alloyId746 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId746"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId746);
    $.__views.__alloyId747 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId747"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId747);
    $.__views.__alloyId748 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId748"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId748);
    $.__views.__alloyId749 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId749"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId749);
    $.__views.__alloyId750 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId750"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId750);
    $.__views.__alloyId751 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId751"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId751);
    $.__views.__alloyId752 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId752"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId752);
    $.__views.__alloyId753 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId753"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId753);
    $.__views.__alloyId754 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId754"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId754);
    $.__views.__alloyId755 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId755"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId755);
    $.__views.__alloyId756 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId756"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId756);
    $.__views.__alloyId757 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId757"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId757);
    $.__views.__alloyId758 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId758"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId758);
    $.__views.__alloyId759 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId759"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId759);
    $.__views.__alloyId760 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId760"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId760);
    $.__views.__alloyId761 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId761"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId761);
    $.__views.__alloyId762 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId762"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId762);
    $.__views.__alloyId763 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId763"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId763);
    $.__views.__alloyId764 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId764"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId764);
    $.__views.__alloyId765 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId765"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId765);
    $.__views.__alloyId766 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId766"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId766);
    $.__views.__alloyId767 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId767"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId767);
    $.__views.__alloyId768 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId768"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId768);
    $.__views.__alloyId769 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId769"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId769);
    $.__views.__alloyId770 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId770"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId770);
    $.__views.__alloyId771 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId771"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId771);
    $.__views.__alloyId772 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId772"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId772);
    $.__views.__alloyId773 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId773"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId773);
    $.__views.__alloyId774 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId774"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId774);
    $.__views.__alloyId775 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId775"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId775);
    $.__views.__alloyId776 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId776"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId776);
    $.__views.__alloyId777 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId777"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId777);
    $.__views.__alloyId778 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId778"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId778);
    $.__views.__alloyId779 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId779"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId779);
    $.__views.__alloyId780 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId780"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId780);
    $.__views.__alloyId781 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId781"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId781);
    $.__views.__alloyId782 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId782"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId782);
    $.__views.__alloyId783 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId783"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId783);
    $.__views.__alloyId784 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId784"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId784);
    $.__views.__alloyId785 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId785"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId785);
    $.__views.__alloyId786 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId786"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId786);
    $.__views.__alloyId787 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId787"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId787);
    $.__views.__alloyId788 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId788"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId788);
    $.__views.__alloyId789 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId789"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId789);
    $.__views.__alloyId790 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId790"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId790);
    $.__views.__alloyId791 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId791"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId791);
    $.__views.__alloyId792 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId792"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId792);
    $.__views.__alloyId793 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId793"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId793);
    $.__views.__alloyId794 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId794"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId794);
    $.__views.__alloyId795 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId795"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId795);
    $.__views.__alloyId796 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId796"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId796);
    $.__views.__alloyId797 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId797"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId797);
    $.__views.__alloyId798 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId798"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId798);
    $.__views.__alloyId799 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId799"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId799);
    $.__views.__alloyId800 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId800"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId800);
    $.__views.__alloyId801 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId801"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId801);
    $.__views.__alloyId802 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId802"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId802);
    $.__views.__alloyId803 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId803"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId803);
    $.__views.__alloyId804 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId804"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId804);
    $.__views.__alloyId805 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId805"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId805);
    $.__views.__alloyId806 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId806"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId806);
    $.__views.__alloyId807 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId807"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId807);
    $.__views.__alloyId808 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId808"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId808);
    $.__views.__alloyId809 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId809"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId809);
    $.__views.__alloyId810 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId810"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId810);
    $.__views.__alloyId811 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId811"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId811);
    $.__views.__alloyId812 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId812"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId812);
    $.__views.__alloyId813 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId813"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId813);
    $.__views.__alloyId814 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId814"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId814);
    $.__views.__alloyId815 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId815"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId815);
    $.__views.__alloyId816 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId816"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId816);
    $.__views.__alloyId817 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId817"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId817);
    $.__views.__alloyId818 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId818"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId818);
    $.__views.__alloyId819 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId819"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId819);
    $.__views.__alloyId820 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId820"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId820);
    $.__views.__alloyId821 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId821"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId821);
    $.__views.__alloyId822 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId822"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId822);
    $.__views.__alloyId823 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId823"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId823);
    $.__views.__alloyId824 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId824"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId824);
    $.__views.__alloyId825 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId825"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId825);
    $.__views.__alloyId826 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId826"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId826);
    $.__views.__alloyId827 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId827"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId827);
    $.__views.__alloyId828 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId828"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId828);
    $.__views.__alloyId829 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId829"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId829);
    $.__views.__alloyId830 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId830"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId830);
    $.__views.__alloyId831 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId831"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId831);
    $.__views.__alloyId832 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId832"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId832);
    $.__views.__alloyId833 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId833"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId833);
    $.__views.__alloyId834 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId834"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId834);
    $.__views.__alloyId835 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId835"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId835);
    $.__views.__alloyId836 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId836"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId836);
    $.__views.__alloyId837 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId837"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId837);
    $.__views.__alloyId838 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId838"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId838);
    $.__views.__alloyId839 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId839"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId839);
    $.__views.__alloyId840 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId840"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId840);
    $.__views.__alloyId841 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId841"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId841);
    $.__views.__alloyId842 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId842"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId842);
    $.__views.__alloyId843 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId843"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId843);
    $.__views.__alloyId844 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId844"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId844);
    $.__views.__alloyId845 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId845"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId845);
    $.__views.__alloyId846 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId846"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId846);
    $.__views.__alloyId847 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId847"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId847);
    $.__views.__alloyId848 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId848"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId848);
    $.__views.__alloyId849 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId849"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId849);
    $.__views.__alloyId850 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId850"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId850);
    $.__views.__alloyId851 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId851"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId851);
    $.__views.__alloyId852 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId852"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId852);
    $.__views.__alloyId853 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId853"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId853);
    $.__views.__alloyId854 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId854"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId854);
    $.__views.__alloyId855 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId855"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId855);
    $.__views.__alloyId856 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId856"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId856);
    $.__views.__alloyId857 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId857"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId857);
    $.__views.__alloyId858 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId858"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId858);
    $.__views.__alloyId859 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId859"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId859);
    $.__views.__alloyId860 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId860"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId860);
    $.__views.__alloyId861 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId861"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId861);
    $.__views.__alloyId862 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId862"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId862);
    $.__views.__alloyId863 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId863"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId863);
    $.__views.__alloyId864 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId864"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId864);
    $.__views.__alloyId865 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId865"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId865);
    $.__views.__alloyId866 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId866"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId866);
    $.__views.__alloyId867 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId867"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId867);
    $.__views.__alloyId868 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId868"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId868);
    $.__views.__alloyId869 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId869"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId869);
    $.__views.__alloyId870 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId870"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId870);
    $.__views.__alloyId871 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId871"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId871);
    $.__views.__alloyId872 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId872"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId872);
    $.__views.__alloyId873 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId873"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId873);
    $.__views.__alloyId874 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId874"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId874);
    $.__views.__alloyId875 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId875"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId875);
    $.__views.__alloyId876 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId876"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId876);
    $.__views.__alloyId877 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId877"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId877);
    $.__views.__alloyId878 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId878"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId878);
    $.__views.__alloyId879 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId879"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId879);
    $.__views.__alloyId880 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId880"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId880);
    $.__views.__alloyId881 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId881"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId881);
    $.__views.__alloyId882 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId882"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId882);
    $.__views.__alloyId883 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId883"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId883);
    $.__views.__alloyId884 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId884"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId884);
    $.__views.__alloyId885 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId885"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId885);
    $.__views.__alloyId886 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId886"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId886);
    $.__views.__alloyId887 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId887"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId887);
    $.__views.__alloyId888 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId888"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId888);
    $.__views.__alloyId889 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId889"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId889);
    $.__views.__alloyId890 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId890"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId890);
    $.__views.__alloyId891 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId891"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId891);
    $.__views.__alloyId892 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId892"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId892);
    $.__views.__alloyId893 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId893"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId893);
    $.__views.__alloyId894 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId894"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId894);
    $.__views.__alloyId895 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId895"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId895);
    $.__views.__alloyId896 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId896"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId896);
    $.__views.__alloyId897 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId897"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId897);
    $.__views.__alloyId898 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId898"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId898);
    $.__views.__alloyId899 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId899"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId899);
    $.__views.__alloyId900 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId900"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId900);
    $.__views.__alloyId901 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId901"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId901);
    $.__views.__alloyId902 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId902"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId902);
    $.__views.__alloyId903 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId903"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId903);
    $.__views.__alloyId904 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId904"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId904);
    $.__views.__alloyId905 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId905"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId905);
    $.__views.__alloyId906 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId906"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId906);
    $.__views.__alloyId907 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId907"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId907);
    $.__views.__alloyId908 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId908"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId908);
    $.__views.__alloyId909 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId909"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId909);
    $.__views.__alloyId910 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId910"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId910);
    $.__views.__alloyId911 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId911"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId911);
    $.__views.__alloyId912 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId912"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId912);
    $.__views.__alloyId913 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId913"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId913);
    $.__views.__alloyId914 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId914"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId914);
    $.__views.__alloyId915 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId915"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId915);
    $.__views.__alloyId916 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId916"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId916);
    $.__views.__alloyId917 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId917"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId917);
    $.__views.__alloyId918 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId918"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId918);
    $.__views.__alloyId919 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId919"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId919);
    $.__views.__alloyId920 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId920"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId920);
    $.__views.__alloyId921 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId921"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId921);
    $.__views.__alloyId922 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId922"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId922);
    $.__views.__alloyId923 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId923"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId923);
    $.__views.__alloyId924 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId924"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId924);
    $.__views.__alloyId925 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId925"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId925);
    $.__views.__alloyId926 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId926"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId926);
    $.__views.__alloyId927 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId927"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId927);
    $.__views.__alloyId928 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId928"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId928);
    $.__views.__alloyId929 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId929"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId929);
    $.__views.__alloyId930 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId930"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId930);
    $.__views.__alloyId931 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId931"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId931);
    $.__views.__alloyId932 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId932"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId932);
    $.__views.__alloyId933 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId933"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId933);
    $.__views.__alloyId934 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId934"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId934);
    $.__views.__alloyId935 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId935"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId935);
    $.__views.__alloyId936 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId936"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId936);
    $.__views.__alloyId937 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId937"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId937);
    $.__views.__alloyId938 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId938"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId938);
    $.__views.__alloyId939 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId939"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId939);
    $.__views.__alloyId940 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId940"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId940);
    $.__views.__alloyId941 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId941"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId941);
    $.__views.__alloyId942 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId942"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId942);
    $.__views.__alloyId943 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId943"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId943);
    $.__views.__alloyId944 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId944"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId944);
    $.__views.__alloyId945 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId945"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId945);
    $.__views.__alloyId946 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId946"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId946);
    $.__views.__alloyId947 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId947"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId947);
    $.__views.__alloyId948 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId948"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId948);
    $.__views.__alloyId949 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId949"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId949);
    $.__views.__alloyId950 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId950"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId950);
    $.__views.__alloyId951 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId951"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId951);
    $.__views.__alloyId952 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId952"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId952);
    $.__views.__alloyId953 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId953"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId953);
    $.__views.__alloyId954 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId954"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId954);
    $.__views.__alloyId955 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId955"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId955);
    $.__views.__alloyId956 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId956"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId956);
    $.__views.__alloyId957 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId957"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId957);
    $.__views.__alloyId958 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId958"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId958);
    $.__views.__alloyId959 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId959"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId959);
    $.__views.__alloyId960 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId960"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId960);
    $.__views.__alloyId961 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId961"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId961);
    $.__views.__alloyId962 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId962"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId962);
    $.__views.__alloyId963 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId963"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId963);
    $.__views.__alloyId964 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId964"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId964);
    $.__views.__alloyId965 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId965"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId965);
    $.__views.__alloyId966 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId966"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId966);
    $.__views.__alloyId967 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId967"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId967);
    $.__views.__alloyId968 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId968"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId968);
    $.__views.__alloyId969 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId969"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId969);
    $.__views.__alloyId970 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId970"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId970);
    $.__views.__alloyId971 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId971"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId971);
    $.__views.__alloyId972 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId972"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId972);
    $.__views.__alloyId973 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId973"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId973);
    $.__views.__alloyId974 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId974"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId974);
    $.__views.__alloyId975 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId975"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId975);
    $.__views.__alloyId976 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId976"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId976);
    $.__views.__alloyId977 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId977"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId977);
    $.__views.__alloyId978 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId978"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId978);
    $.__views.__alloyId979 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId979"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId979);
    $.__views.__alloyId980 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId980"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId980);
    $.__views.__alloyId981 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId981"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId981);
    $.__views.__alloyId982 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId982"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId982);
    $.__views.__alloyId983 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId983"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId983);
    $.__views.__alloyId984 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId984"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId984);
    $.__views.__alloyId985 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId985"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId985);
    $.__views.__alloyId986 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId986"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId986);
    $.__views.__alloyId987 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId987"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId987);
    $.__views.__alloyId988 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId988"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId988);
    $.__views.__alloyId989 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId989"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId989);
    $.__views.__alloyId990 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId990"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId990);
    $.__views.__alloyId991 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId991"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId991);
    $.__views.__alloyId992 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId992"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId992);
    $.__views.__alloyId993 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId993"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId993);
    $.__views.__alloyId994 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId994"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId994);
    $.__views.__alloyId995 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId995"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId995);
    $.__views.__alloyId996 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId996"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId996);
    $.__views.__alloyId997 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId997"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId997);
    $.__views.__alloyId998 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId998"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId998);
    $.__views.__alloyId999 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#f00",
        id: "__alloyId999"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        id: "__alloyId1000"
    }), "View", $.__views.window);
    $.__views.window.add($.__views.__alloyId1000);
    _.extend($, $.__views);
    var args = arguments[0] || {}, test = args.test, start = args.start, title = args.title;
    $.window.title = title;
    Ti.API.info(test + " " + ((new Date).getTime() - start) + "ms end controller");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;