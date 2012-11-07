Ext.define("SFASU.view.Radio.Main", {
    
	extend: 'Ext.navigation.View',
	
    requires: [
        'Ext.TitleBar',
    ],

	xtype: 'radio_main',
	
    config: {
		items: [{
			xtype: 'tabpanel',
			title: 'KSAU Radio',
			iconCls: 'bookmarks',

			tabBarPosition: 'bottom',

	        items: [
				{
					xtype: 'radio_listen'
				},
				{
					xtype: 'radio_schedule'
				},
				{
					xtype: 'radio_about'
				}
	        ]
		}]
    }
});
