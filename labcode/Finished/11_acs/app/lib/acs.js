/*
	Library to wrap app-specific functionality around the ACS APIs
*/
// a couple local variables to save state
var currentUser = null;
var loggedIn = false;

var Cloud = require('ti.cloud');
Cloud.debug = true;

// Persist the user's login status -- by default, they're
// logged out when the app closes
var sid = Ti.App.Properties.getString('sessionid');
exports.isLoggedIn = function() {
    if(typeof arguments[0] == 'function') {
        var cb = arguments[0];
        if(sid) {
            Cloud.sessionId = sid;
            var me = Cloud.Users.showMe(function(e) {
                loggedIn = true;
                currentUser = e.users[0];
                cb();
                return loggedIn;
            });
        } else {
            return loggedIn;
        }
    } else {
        return loggedIn;
    }
};

// Add createUser() here, accepts username, password, and callback function
// ACS API requires password & confirm, but we do the checking elsewhere so use the same for both here
// API also logs in the user, so make sure to set loggedIn and currentUser appropriately
exports.createUser = function(username, password, callback) {
	Cloud.Users.create({
		username: username,
		password: password,
		password_confirmation: password
	}, function (e) {
	    if (e.success) {
	        Ti.App.Properties.setString('sessionid',e.meta.session_id);
	        currentUser = e.users[0];
	        loggedIn = true;
	        callback(e.users[0]);
	    } else {
	    	Ti.API.info('Error' + JSON.stringify(e));
	    	loggedIn = false;
	    	currentUser = null;
	    	callback(false);
	    }
	});
};

// Add saveFugitive() here, accepts a fugitive object, store the 
// custom object in a class named 'fugitive'
// check logged in state, Ti.API.info() out a success/failure message
exports.saveFugitive = function(fugitive) {
	var data = {
		classname: 'fugitive',
		fields: fugitive
	};
	Cloud.Objects.create(data, function(e) {
		Ti.API.info('Fugitive saved to cloud: ' + (e.success) ? 'Success' : 'Oopsie'+JSON.stringify(e));
	});
};


/*

// Add your code to export the login() method here
// accepts username, password, and callback (function)
// make sure to set loggedIn and currentUser appropriately
exports.login = function(username, password, callback) {
	Cloud.Users.login({
	    login: username,
	    password: password
	}, function (e) {
	    if (e.success) {
	    	currentUser = e.users[0];
	    	loggedIn = true;
	    	Ti.App.Properties.setString('sessionid',e.meta.session_id);
			callback(loggedIn);
	    } else {
	        Ti.API.info('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
	        loggedIn = false;
	        currentUser = null;
			callback(loggedIn);
	    }
	});	
};

// Add logout() here, make sure to set loggedIn and currentUser appropriately
// and clear the app property
exports.logout = function() {
	Cloud.Users.logout(function (e) {
	    if (e.success) {
	        currentUser = null;
	        loggedIn = false;
	        Ti.App.Properties.setString('sessionid', '');
	    }
	});		
};


*/
