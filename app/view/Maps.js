Ext.define('SFASU.view.Maps', {

    extend: 'Ext.navigation.View',

    requires: [
        'Ext.plugin.PullRefresh',
		'Ext.data.proxy.JsonP',
		'Ext.Map'
    ],

    xtype: 'maps',

    config: {
		items: [{
			title: 'Campus Map',
			xtype: 'list',
			store: 'Maps',
			indexBar: true,
			grouped: true,

	        plugins: [
	            { type: 'pullrefresh' }
	        ],

	        emptyText: '<p class="no-searches">Could not retrieve map locations.</p>',

	        itemTpl: '{name}',
		}]
    }
});
