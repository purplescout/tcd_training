function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FugitiveRow";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        var $model = __processArg(arguments[0], "$model");
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        className: "loc_row",
        dataId: "",
        id: "row",
        model: "undefined" != typeof $model.__transform["alloy_id"] ? $model.__transform["alloy_id"] : $model.get("alloy_id")
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId8"
    });
    $.__views.row.add($.__views.__alloyId8);
    $.__views.name = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "24dp"
        },
        top: "2dp",
        height: Ti.UI.SIZE,
        left: "5dp",
        right: "5dp",
        id: "name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.__alloyId8.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;