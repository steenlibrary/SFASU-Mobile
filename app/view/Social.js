Ext.define("SFASU.view.Social", {
    
	extend: 'Ext.navigation.View',
	
    requires: [
        'Ext.TitleBar'
    ],

	xtype: 'social',
	
    config: {
		items: [{
			xtype: 'tabpanel',
			title: 'Social',

			tabBarPosition: 'bottom',

	        items: [{
				xtype: 'twitter'
			}]
		}]
    }
});
