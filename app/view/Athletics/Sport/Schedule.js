Ext.define('SFASU.view.Athletics.Sport.Schedule', {

	extend: 'Ext.List',
	
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'athletics_sport_schedule',

    config: {
	
        title: 'Schedule',
		iconCls: 'calendar2',
		
		plugins: [
			{ type: 'pullrefresh' }
		],
		
		emptyText: '<p class="no-searches">There\'s not a lot going on!</p>',
		
		itemTpl: '{title} {content}',
    }
});
