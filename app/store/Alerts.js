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

			url : 'http://library.sfasu.edu/mobile/campus_alert_json.php',
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
        },
		
		listeners: {
			load: function(store, records, successful, operation, eOpts) {
				console.log("load");
			},
			refresh: function(store, data, eOpts) {
				console.log("refresh");
				console.log(data.length);
				console.log(data);
				
				Ext.getCmp('alertButton').setBadgeText(data.length);
				Ext.getCmp('alertButton').setHidden(false);
			}
		}
    }
});