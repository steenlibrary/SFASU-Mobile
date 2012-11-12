Ext.define('SFASU.store.Alerts', {
    extend: 'Ext.data.Store',

    config: {
	
		storeId: 'Alerts',
		
		fields: [
			'status', 
			'title'
		],
			
        autoLoad: true,

        proxy: {
            type: 'jsonp',

			url : serverPath,
			
			extraParams: {
	            feature: 'campus_alert'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        },
		
		listeners: {
			load: function(store, records, successful, operation, eOpts) {
				//console.log("load");
			},
			refresh: function(store, data, eOpts) {
				//console.log("refresh");
				
				Ext.getCmp('alertButton').setBadgeText(data.length);
				Ext.getCmp('alertButton').setHidden(false);
			}
		}
    }
});