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
    }
});
