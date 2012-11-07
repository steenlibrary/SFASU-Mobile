Ext.define('SFASU.view.Facebook', {

    //extend: 'Ext.List',
	extend: 'Ext.List',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'facebook',

    config: {
        title: 'Facebook',
		xtype: 'list',
		store: 'Facebook',
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
