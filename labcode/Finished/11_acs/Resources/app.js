// START: APM service code injection
// Require the apm module
var apm = undefined;
try {
apm = require("com.appcelerator.apm");
}
catch (e) {
Ti.API.info("com.appcelerator.apm module is not available");
}

// Initialize the module if it is defined
apm && apm.init();
// END: APM code injection

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.createController("index");