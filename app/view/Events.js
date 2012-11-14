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

	        store: 'Events',
	        limit: 10,
			grouped: true,

	        plugins: [
	            { type: 'listpaging', autoPaging: true },
	            { type: 'pullrefresh' }
	        ],

	        emptyText: '<p class="no-searches">No upcoming events were found.</p>',

	        itemTpl: '<div><p class="calendar">{date:date("j")} <em>{date:date("M")}</em></p> {title}</div><div style="clear:both"></div>',
		}]
    }
});
