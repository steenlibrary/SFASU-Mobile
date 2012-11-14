Ext.define('SFASU.view.Videos.Main', {

	extend: 'Ext.navigation.View',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP',
		'Ext.Video'
    ],

    xtype: 'videos_main',
	
	config: {
		items:[{
			xtype: (Ext.os.is.Phone ? 'videos_phone' : 'videos_tablet')
		}]
    }
});