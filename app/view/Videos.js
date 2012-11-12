Ext.define('SFASU.view.Videos', {

    //extend: 'Ext.List',
	extend: 'Ext.navigation.View',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP',
		'Ext.Video'
    ],

    xtype: 'videos',
	
	config: {
		items:[{
			xtype: 'list',
			title: 'Recent Videos',

	       	store: 'Videos',
	        limit: 10,
			grouped: true,

	        plugins: [
	            { type: 'listpaging' },
	            { type: 'pullrefresh' }
	        ],

	        emptyText: '<p class="no-searches">There are currently no published videos.</p>',

	        itemTpl: '<p style="display:block"><img src="{thumbnail}" class="thumbnail" width="25%"><strong>{title}</strong>'
				+'<br /><br />{duration}<br /><br /><br /><br /></p>',
		}]
    }
});