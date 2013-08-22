/*
migration.up = function(migrator) {
    var db = migrator.db;
    var table = migrator.table;
    db.execute('CREATE TEMPORARY TABLE fugitives_backup(name,captured,url,capturedLat,capturedLong,alloy_id);')
    db.execute('INSERT INTO fugitives_backup SELECT name,captured,url,capturedLat,capturedLong,id FROM ' + table + ';');
    migrator.dropTable();
    migrator.createTable({
        columns: {
            name: "TEXT",
            captured: "TEXT",
            url: "TEXT",
            capturedLat: "REAL",
            capturedLong: "REAL"
        },
    });
    db.execute('INSERT INTO ' + table + ' SELECT name,captured,url,capturedLat,capturedLong,alloy_id FROM fugitives_backup;');
    db.execute('DROP TABLE fugitives_backup;');

};

migration.down = function(db) {

};
*/
