Ext.define('SFASU.view.Videos.Main', {

	extend: 'Ext.navigation.View',

    xtype: 'videos_main',
	
	config: {
		items:[{
			xtype: (Ext.os.is.Phone ? 'videos_phone' : 'videos_tablet')
		}]
    }
});