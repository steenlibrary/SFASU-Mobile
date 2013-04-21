Ext.define('SFASU.view.Alerts', {

    //extend: 'Ext.List',
	extend: 'Ext.navigation.View',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'alerts',

    config: {
		items: [{
			xtype: 'list',
	        
			title: 'Campus Alerts',
			store: 'Alerts',

	        plugins: [
	            { type: 'pullrefresh' }
	        ],

	        emptyText: '<p class="no-searches">There are no campus alerts at this time.</p>',

	        itemTpl: '{headline}'
		}]
    }
});
