Ext.define('SFASU.view.AARC.WalkIn', {
	
	extend: 'Ext.List',
	xtype: 'aarc_walkin',
	
	requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],
	
	config: {
		iconCls: 'team1',
        title: 'Walk-in Tables',
        store: 'AARC.WalkIn',

		indexBar: true,
		grouped: true,

        plugins: [
            { type: 'listpaging' },
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">Could not load walk in list.</p>',

        itemTpl: 'Meet: {times}<br/>'
			+ 'Location: {room}'
    }
});