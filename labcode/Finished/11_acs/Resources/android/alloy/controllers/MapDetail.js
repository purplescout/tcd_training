function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MapDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mapWindow = Ti.UI.createWindow({
        title: "Captured Location",
        barColor: "#6d0a0c",
        backgroundColor: "#fff",
        id: "mapWindow"
    });
    $.__views.mapWindow && $.addTopLevelView($.__views.mapWindow);
    $.__views.mapView = Alloy.Globals.Map.createView({
        mapType: Alloy.Globals.Map.NORMAL_TYPE,
        animate: true,
        regionFit: true,
        userLocation: false,
        ns: "Alloy.Globals.Map",
        id: "mapView"
    });
    $.__views.mapWindow.add($.__views.mapView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var ann = Alloy.Globals.Map.createAnnotation({
        latitude: args.model.get("capturedLat"),
        longitude: args.model.get("capturedLong"),
        title: args.model.get("name"),
        subtitle: "busted",
        pincolor: Alloy.Globals.Map.ANNOTATION_RED,
        animate: true
    });
    $.mapView.addAnnotation(ann);
    $.mapView.setRegion({
        latitude: args.model.get("capturedLat"),
        longitude: args.model.get("capturedLong"),
        latitudeDelta: .1,
        longitudeDelta: .1
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;