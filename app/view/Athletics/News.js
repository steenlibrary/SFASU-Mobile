Ext.define('SFASU.view.Athletics.News', {

    extend: 'Ext.List',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'athletics_news',

    config: {
	
        title: 'Top Stories',
        store: 'Athletics.News',
        limit: 10,
		grouped: true,

        plugins: [
            { type: 'listpaging' },
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">It must be a slow news day!</p>',

        itemTpl: '{title}'
    }
});
