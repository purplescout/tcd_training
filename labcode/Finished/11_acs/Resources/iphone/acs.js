var currentUser = null;

var loggedIn = false;

var Cloud = require("ti.cloud");

Cloud.debug = true;

var sid = Ti.App.Properties.getString("sessionid");

exports.isLoggedIn = function() {
    if ("function" != typeof arguments[0]) return loggedIn;
    var cb = arguments[0];
    if (!sid) return loggedIn;
    Cloud.sessionId = sid;
    Cloud.Users.showMe(function(e) {
        loggedIn = true;
        currentUser = e.users[0];
        cb();
        return loggedIn;
    });
};

exports.createUser = function(username, password, callback) {
    Cloud.Users.create({
        username: username,
        password: password,
        password_confirmation: password
    }, function(e) {
        if (e.success) {
            Ti.App.Properties.setString("sessionid", e.meta.session_id);
            currentUser = e.users[0];
            loggedIn = true;
            callback(e.users[0]);
        } else {
            Ti.API.info("Error" + JSON.stringify(e));
            loggedIn = false;
            currentUser = null;
            callback(false);
        }
    });
};

exports.saveFugitive = function(fugitive) {
    var data = {
        classname: "fugitive",
        fields: fugitive
    };
    Cloud.Objects.create(data, function(e) {
        Ti.API.info("Fugitive saved to cloud: " + e.success ? "Success" : "Oopsie" + JSON.stringify(e));
    });
};