Ext.define('SFASU.view.Athletics.Sport.News', {

	extend: 'Ext.List',
	
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'athletics_sport_news',

    config: {
	
        title: 'News',
		iconCls: 'broadcast',

		limit: 10,
		grouped: true,
		plugins: [
			//{ type: 'listpaging' },
			{ type: 'pullrefresh' }
		],
		
		emptyText: '<p class="no-searches">There\'s not a lot going on!</p>',
		
		itemTpl: '{title}',
    }
});
