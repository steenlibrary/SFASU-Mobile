Ext.define('SFASU.view.Traditions.Pane', {

	extend: 'Ext.Panel',
	xtype: 'traditions_panel',

	config: {
		cls: 'steveBackground',
		layout: 'vbox',
		defaults: {
			styleHtmlContent: true,
			scrollable: true
		},
		
		items: []
	},
	
	initialize: function() {
		//this.on('painted', this.doOrientation, this);
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
			//items[1].setDocked('top');
		} else {
			oldOrientation = 'portrait';
			//items[1].setDocked('right');
		}
		
		me.element.removeCls('traditionsBackground-' + oldOrientation);
		//me.element.addCls('steveBackground-' + orientation);
		me.element.addCls('traditionsBackground-' + orientation);
		
		console.log(orientation);
		//alert(orientation);
	}
});
