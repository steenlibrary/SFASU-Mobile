Ext.define('SFASU.view.Library.Map', {
	extend: 'Ext.TabPanel',
	xtype: 'library_map',
	
	config: {
		title: 'Library Map',
		iconCls: 'maps',
		//tabBarPosition: 'bottom',
		ui: 'light',
		defaults: {
			styleHtmlContent: true
		},
		items: [{
			title: '1st Floor',
			html: 'Floor 1'
		},{
			title: '2nd Floor',
			html: 'Floor 2'
		},{
			title: '3rd Floor',
			html: 'Floor 3'
		},{
			title: '4th Floor',
			html: 'Floor 4'
		}]
	}
});