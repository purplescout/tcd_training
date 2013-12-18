function Controller() {
    function __alloyId6(e) {
        if (e && e.fromAdapter) return;
        __alloyId6.opts || {};
        var models = dofilter(__alloyId5);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = {};
            var __alloyId4 = Alloy.createController("FugitiveRow", {
                $model: __alloyId2,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId4.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function dofilter() {
        return fugitiveCollection.where({
            captured: 1
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Captured";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Fugitive");
    $.__views.capturedWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "images/grain.png",
        title: "Captured",
        barColor: "#6d0a0c",
        id: "capturedWindow"
    });
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "table"
    });
    $.__views.capturedWindow.add($.__views.table);
    var __alloyId5 = Alloy.Collections["Fugitive"] || Fugitive;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    $.__views.capturedTab = Ti.UI.createTab({
        window: $.__views.capturedWindow,
        id: "capturedTab",
        title: "Captured"
    });
    $.__views.capturedTab && $.addTopLevelView($.__views.capturedTab);
    exports.destroy = function() {
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    var fugitiveCollection = Alloy.Collections.Fugitive;
    $.table.addEventListener("click", function(_e) {
        debugger;
        var detailController = Alloy.createController("FugitiveDetail", {
            parentTab: $.capturedTab,
            data: fugitiveCollection.get(_e.rowData.model)
        });
        $.capturedTab.open(detailController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;