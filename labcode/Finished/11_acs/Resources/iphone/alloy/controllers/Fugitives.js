function Controller() {
    function __alloyId15() {
        __alloyId15.opts || {};
        var models = dofilter(__alloyId14);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = {};
            var __alloyId13 = Alloy.createController("FugitiveRow", {
                $model: __alloyId12
            });
            rows.push(__alloyId13.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function dofilter() {
        debugger;
        return fugitiveCollection.filter(function(_i) {
            return !_i.attributes.captured;
        });
    }
    function addNewFugitive() {
        var addFugitiveController = Alloy.createController("FugitiveAdd");
        $.fugitiveTab.open(addFugitiveController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Fugitives";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Fugitive");
    $.__views.fugitiveWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "images/grain.png",
        title: "Fugitives",
        barColor: "#6d0a0c",
        id: "fugitiveWindow"
    });
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "table"
    });
    $.__views.fugitiveWindow.add($.__views.table);
    var __alloyId14 = Alloy.Collections["Fugitive"] || Fugitive;
    __alloyId14.on("fetch destroy change add remove reset", __alloyId15);
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "Add",
        top: "-50dp"
    });
    $.__views.fugitiveWindow.add($.__views.add);
    $.__views.login = Alloy.createController("Login", {
        id: "login",
        __parentSymbol: $.__views.fugitiveWindow
    });
    $.__views.login.setParent($.__views.fugitiveWindow);
    $.__views.fugitiveTab = Ti.UI.createTab({
        icon: "/images/fugitives.png",
        window: $.__views.fugitiveWindow,
        id: "fugitiveTab",
        title: "Fugitives"
    });
    $.__views.fugitiveTab && $.addTopLevelView($.__views.fugitiveTab);
    exports.destroy = function() {
        __alloyId14.off("fetch destroy change add remove reset", __alloyId15);
    };
    _.extend($, $.__views);
    var fugitiveCollection = Alloy.Collections.Fugitive;
    $.table.addEventListener("click", function(_e) {
        Ti.API.info("_e:" + JSON.stringify(_e));
        var detailController = Alloy.createController("FugitiveDetail", {
            parentTab: $.fugitiveTab,
            data: fugitiveCollection.get(_e.rowData.model)
        });
        $.fugitiveTab.open(detailController.getView());
    });
    if ("iphone" === Ti.Platform.osname) {
        $.add.style = Titanium.UI.iPhone.SystemButtonStyle.PLAIN;
        $.add.addEventListener("click", addNewFugitive);
        $.fugitiveWindow.setRightNavButton($.add);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;