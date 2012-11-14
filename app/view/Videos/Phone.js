Ext.define('SFASU.view.Videos.Phone', {

    extend: 'Ext.List',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'videos_phone',

    config: {
		title: 'Recent Videos',

       	store: 'Videos',
        limit: 10,
		grouped: true,

        plugins: [
            { type: 'listpaging' },
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">There are currently no published videos.</p>',

        itemTpl: 
			'<div style="display:block">'
				+ '<img src="{thumbnail}" class="thumbnail" width="25%">'
				+ '<strong>{title}</strong>'
				+ '<br /><br />{duration}'
			+ '</div>'
			+ '<div style="clear:both;"></div>',
        
    }
});
