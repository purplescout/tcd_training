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
    this.__controllerPath = "Login";
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
    $.__views.logincontainer = Ti.UI.createView({
        backgroundColor: "rgba(0,0,0,0.7)",
        id: "logincontainer"
    });
    $.__views.logincontainer && $.addTopLevelView($.__views.logincontainer);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#fff",
        borderRadius: 8,
        borderColor: "#000",
        borderWidth: 2,
        width: 300,
        height: 300,
        top: 20,
        layout: "vertical",
        id: "wrapper"
    });
    $.__views.logincontainer.add($.__views.wrapper);
    $.__views.img = Ti.UI.createImageView({
        top: 10,
        width: 100,
        image: "/images/login.png",
        id: "img"
    });
    $.__views.wrapper.add($.__views.img);
    $.__views.name = Ti.UI.createTextField({
        backgroundColor: "#fff",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        borderWidth: 1,
        top: 30,
        id: "name",
        hintText: "username"
    });
    $.__views.wrapper.add($.__views.name);
    $.__views.password = Ti.UI.createTextField({
        backgroundColor: "#fff",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        borderWidth: 1,
        top: 10,
        passwordMask: true,
        autocorrection: false,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "password",
        hintText: "password"
    });
    $.__views.wrapper.add($.__views.password);
    $.__views.submit = Ti.UI.createButton({
        title: "Create Account",
        backgroundColor: "#fff",
        left: 10,
        right: 10,
        height: "40dp",
        top: 10,
        id: "submit"
    });
    $.__views.wrapper.add($.__views.submit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var acs = require("acs");
    acs.isLoggedIn(function() {
        $.logincontainer.hide();
    });
    var createCallback = function(user) {
        if (user) $.logincontainer.hide(); else {
            $.submit.title = "Try again ...";
            setTimeout(function() {
                $.submit.title = "Create Account";
            }, 1e3);
        }
    };
    $.submit.addEventListener("click", function() {
        $.name.blur();
        $.password.blur();
        $.submit.title = "Working ...";
        acs.createUser($.name.value, $.password.value, createCallback);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;