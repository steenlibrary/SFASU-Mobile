Ext.define('SFASU.controller.Athletics.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			athletics: 'athletics_main',
			athleticsList: 'athletics_main list',
			sport: 'athletics_sport_main',
			axe: 'athletics_main [name=slidebutton]'
		},
		control: {
			'athletics_main list': {
				itemsingletap: 'showSport',
				itemdoubletap: 'showSport',
				//show: 'showAxe'
			},
			athletics: {
				pop: 'showAxe',
				//push: 'hideAxe'
			}
		}
	},
	
	showAxe: function() {
		if(this.getAxe() && ! this.getAthleticsList().getHidden()) {
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide({type: 'fadeOut'});
		}
	},

	showSport: function(list, index, element, record) {
		if(!this.getSport()) {
			this.hideAxe();
			this.getAthletics().push({
				title: record.get('name'),
				xtype: 'athletics_sport_main',
				record: record
			});
		}
	}
});
