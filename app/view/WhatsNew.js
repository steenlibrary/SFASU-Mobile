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

        store: 'WhatsNew'
    },
	
	initialize: function() {
		this.on('painted', this.doOrientation, this);
		Ext.Viewport.on('orientationchange', this.doOrientation, this);
		this.callParent();
	},
	
	doOrientation: function() {
		var me = this,
			oldOrientation = null,
			orientation = Ext.Viewport.getOrientation(),
			letter = orientation.charAt(0),
			items = this.getItems().getRange(),
			i = 0,
			ln = items.length,
			item, el, top, left;
		
		if(orientation == 'portrait') {
			oldOrientation = 'landscape';
		} else {
			oldOrientation = 'portrait';
		}
		
		//me.element.removeCls(oldOrientation);
		//me.element.addCls('steveBackground-' + orientation);
		console.log('whats new init');
		console.log(orientation);
		
		this.setHeight((Ext.Viewport.getSize().width/(755/312)) + 'px');
		//alert(orientation);
	}
});
