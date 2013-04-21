Ext.define('SFASU.store.Alerts', {
    extend: 'Ext.data.Store',

    config: {
	
		storeId: 'Alerts',
		
		fields: [
			'id',
			'headline',
			'message'
		],
		
		idProperty: 'id',
			
        autoLoad: true,

        proxy: {
            type: 'jsonp',

			url: serverPath,
			
			extraParams: {
	            feature: 'campus_alert'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        },
		
		listeners: {
			addrecords: function(store, records, eOpts) {
				console.log("add records");
				Ext.getCmp('alertButton').setBadgeText(records.length);
				Ext.getCmp('alertButton').setHidden(false);
			},
			
			load: function(store, records, successful, operation, eOpts) {
				console.log("load");
			},
			refresh: function(store, data, eOpts) {
				Ext.getCmp('alertButton').setBadgeText(data.length);
				Ext.getCmp('alertButton').setHidden(false);
			}
		}
    }
});