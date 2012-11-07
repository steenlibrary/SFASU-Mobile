Ext.define('SFASU.view.Home.Athletics', {

	extend: 'Ext.Carousel',
	
    requires: [
        'Ext.plugin.PullRefresh',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'homescreen_athletics',

    config: {
		id: 'athletics_carousel',
		direction: 'vertical',
        store: 'Athletics.News',
    }
});
