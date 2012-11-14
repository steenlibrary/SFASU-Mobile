Ext.define('SFASU.view.Library.Hours', {
	extend: 'Ext.List',
	xtype: 'library_hours',
	
	requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],
	
	config: {
        title: 'Hours',
		iconCls: 'info',
        store: 'Library.Hours',
        limit: 10,
		grouped: true,
		disableSelection: true,

        plugins: [
            { type: 'listpaging' },
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">It must be a slow news day!</p>',

        itemTpl: '{hours}'
    }
});