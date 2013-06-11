var apm = Alloy.Globals.apm;
 

$.err.addEventListener('click', function(e) {
	Ti.API.info('in the err handler')
	try {
	    var err = new Error('FATAL ERROR: Value cannot be null or undefined!');
	    throw err;
	}
	catch (err) {
		Ti.API.info('logging the error')
	    apm.logHandledException(err);
	}
});

$.crash.addEventListener('click', function(e) {
	var ctd = require('ti.crashtestdummy');
	apm.leaveBreadcrumb('About to hard crash');
	ctd.accessBadMemory();
});

$.uncaught.addEventListener('click', function(e) {
	var ctd = require('ti.crashtestdummy');
	apm.leaveBreadcrumb('About to throw native exception');
	ctd.fireInMainThreadUsingNative('throwException');
});


$.index.open();

if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
  var touchTestModule = undefined;
  try {
    touchTestModule = require("com.soasta.touchtest");
  }
  catch (tt_exception) {
    Ti.API.error("com.soasta.touchest module is required");
  }

  var cloudTestURL = Ti.App.getArguments().url;
  if (cloudTestURL != null) {
    // The URL will be null if we don't launch through TouchTest.
    touchTestModule && touchTestModule.initTouchTest(cloudTestURL);
  }

  Ti.App.addEventListener('resumed',function(e) {
    // Hook the resumed from background
    var cloudTestURL = Ti.App.getArguments().url;
    if (cloudTestURL != null) {
      touchTestModule && touchTestModule.initTouchTest(cloudTestURL);
    }
  });
}