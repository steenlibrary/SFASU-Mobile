Ext.define('SFASU.view.Athletics.Sport.Roster', {

	extend: 'Ext.List',
	
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'athletics_sport_roster',

    config: {
	
        title: 'Roster',
		iconCls: 'team',

		grouped: true,
		indexBar: true,
		
		emptyText: '<p class="no-searches">No roster found.</p>',
		
		itemTpl: '{last_name}, {first_name} <tpl if="number != null">(#{number})</tpl>'
    }
});
