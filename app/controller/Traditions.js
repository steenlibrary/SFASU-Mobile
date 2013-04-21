Ext.define('SFASU.controller.Traditions', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			traditions: 'traditions',
			tradition: 'traditions panel',
			traditionInfo: 'traditions_panel panel',
			axe: 'traditions [name=slidebutton]'
		},
		control: {
			/*
			'viewport': {
				orientationchange: 'onOrientationChange'
			},
			*/
			
			'traditions_more': {
				itemtap: 'showTradition'
			},
			
			traditions: {
				pop: 'showAxe'
			}
			
		}
	},

	onOrientationChange: function() {
		
		var orientation = Ext.Viewport.getOrientation();
		
		alert(this.getTraditionInfo());
		
		if(orientation == 'portrait') {
			oldOrientation = 'landscape';
			this.getTraditionInfo().setDocked('bottom');
		} else {
			oldOrientation = 'portrait';
			this.getTraditionInfo().setDocked('right');
		}
		
		alert("traditions onOrientationChange");
		//this.getWhatsNew().setHeight((Ext.Viewport.getSize().width/(755/312)) + 'px');
		//height: (Ext.Viewport.getSize().height/(755/312)) + 'px',
		
		//alert('orientationchange: ' + orientation);
	},
	
	showAxe: function() {
		if(this.getAxe()) {
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide({type: 'fadeOut'});
		}
	},
	
	showTradition: function(list, index, element, record) {
		console.log('traditions_more tap');
		//if(!this.getTraditionDetails()) {
			this.hideAxe();
			this.getTraditions().push({
				xtype: 'panel',
				title: record.get('name'),
				scrollable: true,
				styleHtmlContent: true,
				items: [{
					html: '<h3>' + record.get('name') + '</h3>'
						+ record.get('description')
				}]
			});
		//}
	}
});
