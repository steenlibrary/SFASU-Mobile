Ext.define('SFASU.view.Alerts', {

    extend: 'Ext.DataView',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'alerts',

    config: {
	
        title: 'Campus Alerts',
        store: 'Alerts',

        plugins: [
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">There are no campus alerts at this time.</p>',

        itemTpl: '<div><p class="campus-alerts">{title}</p></div>'
    }
});
