Ext.define('SFASU.controller.Maps', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			maps: 'maps',
			map: 'map',
			homescreen: 'homescreen',
			axe: 'maps [name=slidebutton]'
		},
		control: {
			maps: {
				show: 'showMaps',
				pop: 'showAxe',
				//push: 'hideAxe'
			},
			'maps list': {
				itemtap: 'showMap',
				itemsingletap: 'showMap',
				itemdoubletap: 'showMap'
			}
		}
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
	
	showMaps: function() {
		Ext.getStore('Maps').load();
	},

	showMap: function(list, index, element, record) {
		if (!this.getMap()) {
			this.hideAxe();
			
			var position = new google.maps.LatLng(record.get('lat'), record.get('lon')),
				infoWindow = new google.maps.InfoWindow({ content: record.get('name') }),
				map, marker;
				
			map = this.getMaps().add({
				xtype: 'map',
				title: record.get('name'),
				getLocation: true,
				mapOptions: {
					mapMaker: true,
					zoom: 17,
					center: position,
		        	mapTypeId: google.maps.MapTypeId.HYBRID
				}
			});
		
			marker = new google.maps.Marker({
	        	position: position,
	        	map: map.getMap(),
	        	visible: true
	    	});
		
			infoWindow.open(map, marker);

	    	google.maps.event.addListener(marker, 'click', function() {
	        	infoWindow.open(map, marker);
	    	});
		}
	}
});
