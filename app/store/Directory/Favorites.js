Ext.define('SFASU.store.Directory.Favorites', {
    extend: 'Ext.data.Store',
	
	requires: [
		'Ext.data.proxy.LocalStorage'
	],
	
    config: {
		storeId: 'Directory.Favorites',
		model: 'SFASU.model.Directory.Person',
        autoLoad: true,
        sorters: 'lastname',

        grouper: {
            groupFn: function(record) {
                return record.get('lastname')[0];
            }
        },

		proxy: {
	        type: 'localstorage',
	        id  : 'sfasu-DirectoryFavorites',
			clearOnPageLoad: false
	    }
/*
		proxy: {
			type: 'sqlitestorage',
			//id: 'sfasu-DirectoryFavorites',
			dbConfig: {
				tablename: 'DirectoryFavorites',
				dbConn: SFASU.util.InitSQLite.getConnection()
			}
		}
*/
    }
});