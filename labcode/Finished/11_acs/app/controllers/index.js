function doClick(e) {
    alert($.label.text);
}

Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
//determine if the database needs to be seeded
if (!Ti.App.Properties.hasProperty('seeded')) {

    // add all items to collection
    Alloy.Collections.Fugitive.reset([{
        "name" : "Jeff Haynie"
    }, {
        "name" : "Nolan Wright"
    }, {
        "name" : "Don Thorp"
    }, {
        "name" : "Marshall Culpepper"
    }, {
        "name" : "Blain Hamon"
    }]);

    // save all of the elements
    Alloy.Collections.Fugitive.each(function(_m) {
        _m.save();
    });

    Ti.App.Properties.setString('seeded', 'yuppers');

    $.tabGroup.open();

} else {

    $.tabGroup.open();

}

// force tables to update
Alloy.Collections.Fugitive.fetch();


if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad')
{
  var touchTestModule = undefined;
  try
  {
    touchTestModule = require("com.soasta.touchtest");
  }
  catch (tt_exception)
  {
    Ti.API.error("com.soasta.touchest module is required");
  }

  var cloudTestURL = Ti.App.getArguments().url;
  if (cloudTestURL != null)
  {
    // The URL will be null if we don't launch through TouchTest.
    touchTestModule && touchTestModule.initTouchTest(cloudTestURL);
  }

  Ti.App.addEventListener('resumed',function(e)
  {
    // Hook the resumed from background
    var cloudTestURL = Ti.App.getArguments().url;
    if (cloudTestURL != null)
    {
      touchTestModule && touchTestModule.initTouchTest(cloudTestURL);
    }
  });
}

if(OS_ANDROID) {
    // Add the app's name to the Android action bar
    $.tabGroup.addEventListener('open', function(e) {
        var activity = $.tabGroup.getActivity(); 
        if (activity != undefined && activity.actionBar != undefined) {
            // set the title to the app name defined in tiapp.xml
            activity.actionBar.title = Ti.App.name; 
        }
    });
}

