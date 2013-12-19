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
if(OS_ANDROID) {
    function addNewFugitive() {
        var addFugitiveController = Alloy.createController('FugitiveAdd');
        var tab_fugitives = $.fugitivesTab.getView(); 
        tab_fugitives.open(addFugitiveController.getView());
    }
}

// force tables to update
Alloy.Collections.Fugitive.fetch();

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

