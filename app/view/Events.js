Ext.define('SFASU.view.Events', {

	extend: 'Ext.navigation.View',
	
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'events',

    config: {
        items: [{
			xtype: 'list',
			title: 'Upcoming Events',
			iconCls: 'calendar2',

	        store: 'Events',
	        limit: 10,
			grouped: true,

	        plugins: [
	            { type: 'listpaging', autoPaging: true },
	            { type: 'pullrefresh' }
	        ],

	        emptyText: '<p class="no-searches">There\'s not a lot going on!</p>',

	        itemTpl: '{title}',
		}]
    }
});
