Ext.define('SFASU.controller.Directory.Person.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			directory: 'directory_main',
			person: 'directory_person',
			favoriteButton: 'directory_main #favoriteButton'
		},
		control: {
			'directory_main #favoriteButton': {
				tap: 'favoriteAction'
			},
			'directory_main directory_person': {
				show: 'showFavoriteButton',
				hide: 'hideFavoriteButton'
			}
		}
	},
	
	showFavoriteButton: function(button, event, eOpts) {
		var personRecord = this.getPerson().config;
		var favoritesStore = Ext.getStore('Directory.Favorites');
		
		if(favoritesStore.findRecord('personId', personRecord.personId)) {
			this.getFavoriteButton().setIconCls('user_remove2');
		} else {
			this.getFavoriteButton().setIconCls('user_add');
		}
		
		this.getFavoriteButton().enable();
		this.getFavoriteButton().show({type: 'fadeIn'});
	},
	
	hideFavoriteButton: function(button, event, eOpts) {
		this.getFavoriteButton().disable();
		this.getFavoriteButton().hide({type: 'fadeOut'});
	},
	
	favoriteAction: function(button, event, eOpts) {
		//console.log('favoriteAction');
		//console.log(this.getPerson().config.id);
		var favoriteRecord;
		var personRecord = this.getPerson().config;
		var favoritesStore = Ext.getStore('Directory.Favorites');
		//console.log(personRecord.id);
		if(favoriteRecord = favoritesStore.findRecord('personId', personRecord.personId)) {
			//console.log(favoriteRecord);
			//Ext.Msg.alert('Error', 'Favorite already exists!', Ext.emptyFn);
			favoritesStore.remove(favoriteRecord);
			favoritesStore.sync();
			this.getFavoriteButton().setIconCls('user_add');
		} else {
			favoritesStore.add({ 
				firstname: personRecord.firstname,
				lastname: personRecord.lastname,
				email: personRecord.email,
				department: personRecord.department,
				role: personRecord.role,
				phone: personRecord.phone,
				personId: personRecord.id
			});
			favoritesStore.sync();
			//console.log(favoritesStore);
			this.getFavoriteButton().setIconCls('user_remove2');
		}
	}
});
