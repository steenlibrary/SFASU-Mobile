Ext.define("SFASU.view.Directory.Main", {
    
	extend: 'Ext.navigation.View',
	
    requires: [
        'Ext.TitleBar'
    ],

	xtype: 'directory_main',
	
    config: {
		navigationBar: {
			items: [{
				xtype: 'button',
				id: 'favoriteButton',
				ui: 'plain',
				iconCls: 'user_add',
				iconMask: true,
				align: 'right',
				hidden: true,
				hideAnimation: Ext.os.is.Android ? false : {
					type: 'fadeOut',
					duration: 200
				},
				showAnimation: Ext.os.is.Android ? false : {
					type: 'fadeIn',
					duration: 200
				}
			}]
		},
		
		items: [{
			xtype: 'tabpanel',
			
			title: 'Directory',

			tabBarPosition: 'bottom',

	        items: [{
				xtype: 'directory_search'
			},{
				xtype: 'directory_departments'
			},{
				xtype: 'directory_favorites'
			},{
				xtype: 'directory_general'
			},{
				xtype: 'directory_emergency'
			}]
		}]
    }
});
