Ext.define('SFASU.store.Athletics.Sport.Bio', {
    extend: 'Ext.data.Store',

    config: {
		model: 'SFASU.model.Athletics.Sport.Bio',
		storeId: 'Athletics.Sport.Bio',

        proxy: {

            type: 'jsonp',

            //url: 'http://library.sfasu.edu/mobile/athletics_bio_json.php',

			url: serverPath,

			extraParams: {
				feature: 'athletics_bio',
	            bio_id: '',
				details: ''
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
			
        },
		listeners: {
			beforeload: function() {
				//console.log("before load");
                Ext.Viewport.setMasked({
                    xtype: 'loadmask'
                });
            },
			load: function() {
				// Do some stuff here ...
				Ext.Viewport.setMasked(false);
			}
		}
    }
});