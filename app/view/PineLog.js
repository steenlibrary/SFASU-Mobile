Ext.define('SFASU.view.PineLog', {

	extend: 'Ext.navigation.View',
    //extend: 'Ext.List',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'pinelog',

	config: {
		title: 'Recent News',
		items: [{
			title: 'Pine Log News',
			xtype: 'list',
			store: 'PineLog',
	        limit: 10,
			grouped: true,

	        plugins: [
	            { type: 'listpaging', autoPaging: true },
	            { type: 'pullrefresh' }
	        ],

	        emptyText: '<p class="no-searches">It must be a slow news day!</p>',

	        itemTpl: '<p><tpl if="thumbnail != null"><div class="avatar" style="background-image: url({thumbnail});"></div></tpl>{title}</p><br/>'
		}]
        
    }
});