Ext.define('SFASU.view.Directory.Departments', {
	
	extend: 'Ext.List',
	xtype: 'directory_departments',
	
	requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],
	
	config: {
		iconCls: 'team',
        title: 'Departments',
        store: 'Directory.Departments',

		indexBar: true,
		grouped: true,

        plugins: [
            { type: 'listpaging' },
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">Could not load departments list.</p>',

        itemTpl: '{department}'
    }
});