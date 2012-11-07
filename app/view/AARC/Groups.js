Ext.define('SFASU.view.AARC.Groups', {
	
	extend: 'Ext.List',
	xtype: 'aarc_sigroups',
	
	requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],
	
	config: {
		iconCls: 'team',
        title: 'SI Groups',
        store: 'AARC.Groups',

		indexBar: true,
		grouped: true,

        plugins: [
            //{ type: 'listpaging' },
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">Could not load course list.</p>',

        itemTpl: 'Section: {section}<br/>'
			+ 'Instructor: {professor}<br/>'
			//+ 'Leader: {leader}<br/>'
			//+ 'Meet: {times}<br/>'
			//+ 'Location: {room}'
    }
});