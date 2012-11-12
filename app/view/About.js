Ext.define("SFASU.view.About", {
    
	extend: 'Ext.navigation.View',
	
    requires: [
        'Ext.TitleBar',
    ],

	xtype: 'about',
	
    config: {
		items: [{
			xtype: 'tabpanel',
			title: 'SFASU Mobile',
			iconCls: 'bookmarks',

			tabBarPosition: 'bottom',

	        items: [
				{
					xtype: 'panel',
					title: 'About',
					iconCls: 'help',
					styleHtmlContent: true,
					html: '<p>SFASU Mobile was originally developed as a joint effort project'
						+' between Ralph W. Steen Library Web Services, the Student'
						+' Government Association, Web Development, and Dr. Steve'
						+' Galatas. The project originated from a'
						+' brainstorming session between SFASU attendees at the'
						+' eCitzenship Conference in Detroit.  The eCitizenship'
						+' Initiative at SFASU is sponsored by the American Democracy'
						+' Project at SFASU.</p>'
						+'<p>Version 2.0 was designed with both smartphones and tablets in mind.'
						+' The source code of version 2.0 has been open sourced and is available'
						+' on GitHub.</p>'
				},
				{
					xtype: 'dataview',
					title: 'Credits',
					iconCls: 'team',
					store: {
						autoLoad: true,
						fields: ['firstname', 'lastname', 'role', 'department', 'personId'],
						data: [
							{
								firstname: 'Michael', 
								lastname: 'Gillen', 
								role: 'Lead Developer & Programmer', 
								department: 'Library Web Services',
								personId: '21695'
							},
							{
								firstname: 'Karrie', 
								lastname: 'Roberson', 
								role: 'Graphics & Development', 
								department: 'Library Web Services',
								personId: '23496'
							},
							{
								firstname: 'Kreg', 
								lastname: 'Mosier', 
								role: 'Development', 
								department: 'Library Web Services',
								personId: '21060'
							},
							{
								firstname: 'Jason', 
								lastname: 'Johnstone', 
								role: 'Development & Project Management', 
								department: 'Campus Web Development',
								personId: '21901'
							},
						]
					},
					
					cls: 'personInfo',
					itemTpl: [
						'<tpl for=".">',
							'<div class="header">',
								'<div class="avatar" style="background-image: url(http://www.sfasu.edu/directory/uploads/{personId}.jpg);"></div>',
								'<h3>{firstname} {lastname}</h3>',
								'<h4>{role}, {department}</h4>',
							'</div>',
						'</tpl>'
					]
				},
				{
					xtype: 'formpanel',
					title: 'Support',
					iconCls: 'chat3',
					items: [
						{
							xtype: 'fieldset',
							title: 'Contact the Mobile App Team',
							defaults: {
								labelWidth: '35%'
							},
							items: [
								{
									xtype: 'textfield',
									name: 'name',
									label: 'Your Name',
									placeHolder: 'John Smith',
									autoCapitalize: true,
									required: true,
									clearIcon: true
								},
								{
									xtype: 'emailfield',
									name: 'email',
									label: 'Email',
									placeHolder: 'jsmith@example.com',
									required: true,
									clearIcon: true
								},
								{
									xtype: 'textareafield',
									name: 'comment',
									label: 'Comment',
									required: true
								}
							]
						},{
							xtype: 'button',
							text: 'Send'
						}
					]
				}
	        ]
		}]
    }
});
