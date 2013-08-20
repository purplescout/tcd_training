if(OS_ANDROID) {
    // we need a reference to the ti.map module even though we're adding it via the XML
    var MapModule = require('ti.map');

    // for now, must add annotations in code
    var anno1 = MapModule.createAnnotation({
        title:"Mountain View", 
        latitude:37.389569, 
        longitude:-122.050212
    });
    $.map.addAnnotation(anno1);
    var anno2 = MapModule.createAnnotation({
        title:"Sydney", 
        latitude: -33.87365, 
        longitude: 151.20689
    });
    $.map1.addAnnotation(anno2);
    
    // have to set properties that rely on module constants in the controller
    $.map1.mapType = MapModule.TERRAIN_TYPE;
}


$.win.open();
