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
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __alloyId17 = [];
    $.__views.__alloyId18 = Alloy.createController("Fugitives", {
        id: "__alloyId18"
    });
    __alloyId17.push($.__views.__alloyId18.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId20 = Alloy.createController("Captured", {
        id: "__alloyId20"
    });
    __alloyId17.push($.__views.__alloyId20.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId17,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("seeded: " + Ti.App.Properties.hasProperty("seeded"));
    if (Ti.App.Properties.hasProperty("seeded")) $.tabGroup.open(); else {
        Alloy.Collections.Fugitive.reset([ {
            name: "Jeff Haynie"
        }, {
            name: "Nolan Wright"
        }, {
            name: "Don Thorp"
        }, {
            name: "Marshall Culpepper"
        }, {
            name: "Blain Hamon"
        } ]);
        Alloy.Collections.Fugitive.each(function(_m) {
            _m.save();
        });
        Ti.App.Properties.setString("seeded", "yuppers");
        $.tabGroup.open();
    }
    Alloy.Collections.Fugitive.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;