Ext.define('SFASU.view.News', {

	extend: 'Ext.navigation.View',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'news',

    config: {
        title: 'Recent News',
	
		items: [{
			title: 'Recent News',
			xtype: 'list',
			store: 'News',
	        limit: 10,
			grouped: true,

	        plugins: [
	            { type: 'listpaging' },
	            { type: 'pullrefresh' }
	        ],

	        emptyText: '<p class="no-searches">There was an error retrieving the news.</p>',

	        itemTpl: '<img src="{thumbnail}" style="float: left; padding-right: 5px;" /> {title}'
		}]
        
    }
});
