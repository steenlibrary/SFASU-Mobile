Ext.define('SFASU.view.Home.News', {

	extend: 'Ext.Carousel',
	
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'homescreen_news',

    config: {
		id: 'news_carousel',
		direction: 'vertical',
        store: 'News',
    }
});
