Ext.define('SFASU.view.Directory.List', {
	
	extend: 'Ext.List',
	xtype: 'directory_list',
	
	requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],
	
	config: {
        title: 'Search Results',

		indexBar: true,
		grouped: true,

        plugins: [
            //{ type: 'listpaging' },
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">No results found.</p>',

        itemTpl: '{lastname}, {firstname}'
    }
});