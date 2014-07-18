Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
//determine if the database needs to be seeded
if (!Ti.App.Properties.hasProperty('seeded')) {

	var names = ["Jeff Haynie", "Nolan Wright", "Blain Hamon", "Aaron Saunders", "Anthony Decena"];

	// Loop through the names array to create a model representing each and save it to the colleciton
	
	// set our app property so this code doesn't run next time
    Ti.App.Properties.setString('seeded', 'yuppers');
    $.tabGroup.open();

} else {

    $.tabGroup.open();

}

// force tables to update
Alloy.Collections.Fugitives.fetch();