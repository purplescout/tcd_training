function Controller() {
    function dataTransformation(_model) {
        $.capture_button.visible = !_model.attributes.captured;
        $.map_button.visible = _model.attributes.captured;
        return {
            name: _model.attributes.name,
            captured: _model.attributes.captured ? "Captured" : "Not Captured",
            image: _model.attributes.url || "/images/burglar.png"
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FugitiveDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.fugitiveDetail = Alloy.createModel("Fugitive");
    $.__views.detailWindow = Ti.UI.createWindow({
        layout: "vertical",
        barColor: "#6d0a0c",
        backgroundColor: "transparent",
        backgroundImage: "/images/grain.png",
        id: "detailWindow",
        model: "$.fugitiveDetail",
        dataTransform: "dataTransformation"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    $.__views.captured_lbl = Ti.UI.createLabel({
        top: 10,
        textAlign: "center",
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "#fff",
        height: Ti.UI.SIZE,
        id: "captured_lbl"
    });
    $.__views.detailWindow.add($.__views.captured_lbl);
    $.__views.image = Ti.UI.createImageView({
        height: 80,
        width: 60,
        top: 10,
        id: "image"
    });
    $.__views.detailWindow.add($.__views.image);
    $.__views.photo_button = Ti.UI.createButton({
        title: "Add Photo",
        top: 10,
        height: Ti.UI.SIZE,
        width: 200,
        id: "photo_button"
    });
    $.__views.detailWindow.add($.__views.photo_button);
    $.__views.capture_button = Ti.UI.createButton({
        title: "Capture",
        top: 10,
        height: Ti.UI.SIZE,
        width: 200,
        id: "capture_button"
    });
    $.__views.detailWindow.add($.__views.capture_button);
    $.__views.map_button = Ti.UI.createButton({
        title: "View On Map",
        top: 10,
        height: Ti.UI.SIZE,
        width: 200,
        id: "map_button"
    });
    $.__views.detailWindow.add($.__views.map_button);
    $.__views.delete_button = Ti.UI.createButton({
        title: "Delete",
        top: 10,
        height: Ti.UI.SIZE,
        width: 200,
        id: "delete_button"
    });
    $.__views.detailWindow.add($.__views.delete_button);
    var __alloyId7 = function() {
        $.detailWindow.title = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform()["name"] : $.fugitiveDetail.get("name");
        $.detailWindow.title = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform()["name"] : $.fugitiveDetail.get("name");
        $.captured_lbl.text = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform()["captured"] : $.fugitiveDetail.get("captured");
        $.captured_lbl.text = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform()["captured"] : $.fugitiveDetail.get("captured");
        $.image.image = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform()["image"] : $.fugitiveDetail.get("image");
        $.image.image = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform()["image"] : $.fugitiveDetail.get("image");
    };
    $.fugitiveDetail.on("fetch change destroy", __alloyId7);
    exports.destroy = function() {
        $.fugitiveDetail.off("fetch change destroy", __alloyId7);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.parentController = args.parentTab;
    $.fugitiveDetail = _.extend({}, $.fugitiveDetail, {
        transform: function() {
            return dataTransformation(this);
        }
    });
    Ti.API.info("args.data = " + JSON.stringify(args.data));
    $.fugitiveDetail.set(args.data.attributes);
    $.photo_button.addEventListener("click", function() {
        var cameraOptions = {
            success: function(event) {
                var image = event.media;
                $.image.image = image;
                var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "photo" + args.data.get("alloy_id") + ".png");
                f.write(image);
                var fugitiveModel = args.data;
                fugitiveModel.set("url", f.nativePath);
                fugitiveModel.save();
                Alloy.Collections.Fugitive.fetch();
            },
            cancel: function() {},
            error: function(error) {
                var a = Ti.UI.createAlertDialog({
                    title: "Camera Error"
                });
                error.code == Ti.Media.NO_CAMERA ? a.setMessage("MISSING CAMERA") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        };
        Ti.Media.isCameraSupported && "google_sdk" != Ti.Platform.model && "Genymotion" != Ti.Platform.manufacturer ? Ti.Media.showCamera(cameraOptions) : Ti.Media.openPhotoGallery(cameraOptions);
    });
    $.map_button.addEventListener("click", function() {
        if (args.data.get("capturedLat")) {
            var mapController = Alloy.createController("MapDetail", {
                model: args.data
            });
            args.parentTab.open(mapController.getView());
        } else alert("Not Captured Yet");
    });
    $.delete_button.addEventListener("click", function() {
        args.data.destroy();
        Alloy.Collections.Fugitive.fetch();
        "android" == Ti.Platform.osname ? setTimeout(function() {
            $.detailWindow.close();
        }, 2e3) : $.detailWindow.close();
    });
    $.capture_button.addEventListener("click", function() {
        Ti.Geolocation.purpose = "Tracking down criminal scum";
        if (Ti.Geolocation.locationServicesEnabled) {
            Ti.Geolocation.accuracy = "android" === Ti.Platform.osname ? Ti.Geolocation.ACCURACY_HIGH : Ti.Geolocation.ACCURACY_BEST;
            Ti.Geolocation.getCurrentPosition(function(e) {
                if (e.error) Ti.UI.createAlertDialog({
                    title: "Error",
                    message: "Geolocation failed. Do you have a location set on your Android emulator?"
                }).show(); else {
                    var fugitiveModel = args.data;
                    fugitiveModel.set("capturedLat", e.coords.latitude);
                    fugitiveModel.set("capturedLong", e.coords.longitude);
                    fugitiveModel.set("captured", 1);
                    fugitiveModel.save();
                    var acs = require("acs");
                    acs.saveFugitive(fugitiveModel);
                    Alloy.Collections.Fugitive.fetch();
                    Ti.UI.createAlertDialog({
                        title: "Success!",
                        message: "You have successfully captured " + fugitiveModel.get("name")
                    }).show();
                    "android" == Ti.Platform.osname ? setTimeout(function() {
                        $.detailWindow.close();
                    }, 2e3) : $.detailWindow.close();
                }
            });
        } else Ti.UI.createAlertDialog({
            title: "Error",
            message: "No Location Services"
        }).show();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;