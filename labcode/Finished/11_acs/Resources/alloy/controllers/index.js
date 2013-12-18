function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        id: "tabGroup"
    });
    $.__views.__alloyId17 = Alloy.createController("Fugitives", {
        id: "__alloyId17"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId17.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId19 = Alloy.createController("Captured", {
        id: "__alloyId19"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId19.getViewEx({
        recurse: true
    }));
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