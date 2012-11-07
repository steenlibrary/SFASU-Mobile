Ext.define('SFASU.view.Home.Social', {

	extend: 'Ext.Carousel',
	
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'homescreen_social',
	
    config: {
		id: 'social_carousel',
		direction: 'vertical',
        store: 'Twitter',
    }
});
