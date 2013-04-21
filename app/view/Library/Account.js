Ext.define('SFASU.view.Library.Account', {

    extend: 'Ext.List',

    xtype: 'library_account',
	
	config: {
		title: 'Account',
		iconCls: 'user3',
        itemTpl: '{name}',
		onItemDisclosure: true,
		
		store: {
			autoLoad: true,
			
			fields: ['name', 'id', 'url'],
			
			data: [{
				name: 'My Favorites',
				id: 'Favorites',
				url: 'http://library.sfasu.edu/find/MyResearch/Favorites'
			},{
				name: 'My Checked Out Items',
				id: 'CheckedOut',
				url: 'http://library.sfasu.edu/find/MyResearch/CheckedOut'
			},{
				name: 'My Holds',
				id: 'Holds',
				url: 'http://library.sfasu.edu/find/MyResearch/Holds'
			},{
				name: 'My Fines',
				id: 'Fines',
				url: 'http://library.sfasu.edu/find/MyResearch/Fines'
			}]
		}
    }
});