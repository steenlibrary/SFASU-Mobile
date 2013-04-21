Ext.define('SFASU.view.Directory.Search', {
	extend: 'Ext.form.Panel',
	xtype: 'directory_search',
	
	requires: [
        'Ext.form.FieldSet',
		'Ext.field.Select'
    ],
	
	config: {
		title: 'Search',
		iconCls: 'search1',

		items: 	[
			{
				xtype: 'fieldset',
			    title: 'Search Staff Directory',
				instructions: '(first OR last name only)',
				items: [
					{
						xtype: 'textfield',
						id: 'directory_term',
						placeHolder: 'Pattillo'
					}
			    ]
			},
			{
				xtype: 'button',
				text: 'Search'
			}
		]
	}
});