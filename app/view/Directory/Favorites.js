Ext.define('SFASU.view.Directory.Favorites', {
	
	extend: 'Ext.List',
	xtype: 'directory_favorites',
	
	requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],
	
	config: {
        title: 'Favorites',
		iconCls: 'user_fave',
		
		store: 'Directory.Favorites',

		indexBar: false,
		grouped: true,

        emptyText: '<p class="no-searches">You currently have no favorites.</p>',

        itemTpl: '{lastname}, {firstname}'
    }
});