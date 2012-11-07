Ext.define('SFASU.view.Directory.Person.Main', {

	extend: 'Ext.Panel',
	xtype: 'directory_person',

	config: {
		layout: 'vbox',
		//scrollable: 'vertical',
		
		items: [
			{
				xtype: 'directory_person_info',
			},
			{
				xtype: 'list',
				items: [
					{
						xtype: 'listitemheader',
						cls: 'dark',
						html: 'Contact Information'
					}
					
				]
			},
			{
				scrollable: false,
				xtype: 'directory_person_contact',
				flex: 1
			},
			{
				xtype: 'list',
				items: [
					{
						xtype: 'listitemheader',
						cls: 'dark',
						html: 'Location'
					}
				]
			}
		]
	}
});
