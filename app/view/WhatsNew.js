Ext.define('SFASU.view.WhatsNew', {

	extend: 'Ext.Carousel',
	
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'whatsnew',

    config: {
		id: 'whatsnew_carousel',
		direction: 'vertical',

        store: 'WhatsNew',
        //limit: 10,
		//grouped: true,

        //emptyText: '<p class="no-searches">There\'s not a lot going on!</p>',

        //itemTpl: '{caption}<img src="{image}" width="100%" />',
    }
});
