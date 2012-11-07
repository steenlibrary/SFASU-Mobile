Ext.define('SFASU.view.NewStudent', {

    extend: 'Ext.navigation.View',

    xtype: 'newstudent',
	
	config: {
		
        items: [{
			title: 'Become a Student',
			xtype: 'list',
			
			itemTpl: '{name}',
			onItemDisclosure: true,
			
			store: {
				autoLoad: true,
				
				fields: ['name', 'id', 'url'],
				
				data: [
					{
						name: 'Apply to SFA',
						id: 'apply',
						url: 'https://www.applytexas.org/adappc/gen/c_start.WBX'
					},
					{
						name: 'Campus Tours',
						id: 'campustours',
						url: 'http://www.sfasu.edu/2464.asp'
					},
					{
						name: 'Showcase Saturday',
						id: 'showcase',
						url: 'http://www.sfasu.edu/admissions/visitsfa/showcase.asp'
					},
					{
						name: 'Campus Living & Residence Life',
						id: 'reslife',
						url: 'http://www.sfasu.edu/reslife/'
					},
					{
						name: 'Campus Activities & Organizations',
						id: 'studentaffairs',
						url: 'http://www.sfasu.edu/studentaffairs/'
					},
					{
						name: 'Academic Opportunities',
						id: 'academic',
						url: 'http://www.sfasu.edu/97.asp'
					},
				]
			}
		}]
	
    }
});