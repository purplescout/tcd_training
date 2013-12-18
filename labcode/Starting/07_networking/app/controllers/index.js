Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
//determine if the database needs to be seeded
if (!Ti.App.Properties.hasProperty('seeded')) {

	// Use the HTTPClient object to send a GET request to 
	// http://bountyhunterapp.appspot.com/bounties and process the returned data.
	// It returns an array of objects in the form [{name: 'Jeff Haynie'}, ...]
	
    $.tabGroup.open();

} else {

    $.tabGroup.open();

}

// force tables to update
Alloy.Collections.Fugitives.fetch();

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
