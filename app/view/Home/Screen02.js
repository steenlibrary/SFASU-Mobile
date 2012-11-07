Ext.define('SFASU.view.Home.Screen02', {
	extend: 'Ext.Panel',
	xtype: 'screen02',
	
	config: {
		title: 'SFASU Mobile',
		iconCls: 'home',
		
		items: [
			{
				xtype: 'panel',
				layout: {
					type: 'hbox',
				    align: 'start',
				    pack: 'center'
				},
				flex: 1,
				defaults: {
					iconAlign: 'top',
					iconMask: true
				},
				items: [
					{
						xtype: 'button',
						id: 'aarc_main',
						text: 'Tutoring', 
						height: 75,
						width: 75,
						margin: 4,
						flex: 1,
						iconCls: 'team1'
					},
					{
						xtype: 'button',
						id: 'pinelog',
						text: 'Pine Log', 
						margin: 4,
						flex: 1,
						height: 75,
						width: 75,
						iconCls: 'layout'
					},
					{
						xtype: 'button',
						id: 'radio_main',
						text: 'Radio', 
						margin: 4,
						flex: 1,
						height: 75,
						width: 75,
						iconCls: 'headphones'
					}
				]
			}
        ]
	}
});