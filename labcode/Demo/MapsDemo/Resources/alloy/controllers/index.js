function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    var __alloyId0 = [];
    $.__views.annotation1 = Ti.Map.createAnnotation({
        title: "Mountain View",
        latitude: 37.389569,
        longitude: -122.050212,
        id: "annotation1"
    });
    __alloyId0.push($.__views.annotation1);
    $.__views.map = Ti.Map.createView({
        userLocation: false,
        animate: true,
        height: "50%",
        top: 0,
        region: {
            latitude: 37.38,
            latitudeDelta: .2,
            longitude: -122.05,
            longitudeDelta: .2
        },
        annotations: __alloyId0,
        id: "map",
        ns: Ti.Map
    });
    $.__views.win.add($.__views.map);
    $.__views.dividerLine = Ti.UI.createView({
        backgroundColor: "black",
        height: 1,
        width: Ti.UI.FILL,
        top: "50%",
        zIndex: 2,
        id: "dividerLine"
    });
    $.__views.win.add($.__views.dividerLine);
    var __alloyId1 = [];
    $.__views.annotation2 = Ti.Map.createAnnotation({
        title: "Sydney",
        latitude: -33.87365,
        longitude: 151.20689,
        id: "annotation2"
    });
    __alloyId1.push($.__views.annotation2);
    $.__views.map1 = Ti.Map.createView({
        userLocation: false,
        animate: true,
        height: "50%",
        top: "50%",
        region: {
            latitude: -33.87365,
            longitude: 151.20689,
            latitudeDelta: .1,
            longitudeDelta: .1
        },
        annotations: __alloyId1,
        id: "map1",
        ns: Ti.Map
    });
    $.__views.win.add($.__views.map1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;