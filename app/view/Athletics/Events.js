Ext.define('SFASU.view.Athletics.Events', {

    extend: 'Ext.List',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'athletics_events',

    config: {
	
        title: 'Top Events & Scores',
        store: 'Athletics.Events',
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
