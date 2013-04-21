Ext.define('SFASU.view.Courses', {

    extend: 'Ext.navigation.View',

    xtype: 'courses',
	
	config: {
		
        items: [{
			title: 'Courses',
			xtype: 'list',
			
			itemTpl: '{name}',
			onItemDisclosure: true,
			
			store: {
				autoLoad: true,
				
				fields: ['name', 'id', 'url'],
				
				data: [{
					name: 'Desire2Learn',
					id: 'Desire2Learn',
					url: 'https://d2l.sfasu.edu/d2l/m/home'
				},{
					name: 'MySFA',
					id: 'MySFA',
					url: 'https://mysfa-prod.sfasu.edu'
				}]
			}
		}]
	
    }
});