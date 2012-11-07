Ext.define('SFASU.view.Home.Videos', {

	extend: 'Ext.Carousel',
	
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'homescreen_videos',

    config: {
		id: 'videos_carousel',
		direction: 'vertical',
        store: 'Videos'
    }
});
