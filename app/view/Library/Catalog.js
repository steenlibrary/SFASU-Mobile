Ext.define('SFASU.view.Library.Catalog', {
	extend: 'Ext.form.Panel',
	xtype: 'library_catalog',
	
	requires: [
        'Ext.form.FieldSet',
		'Ext.field.Select'
    ],
	
	config: {
		title: 'Catalog',
		iconCls: 'search1',

		items: 	[
			{
				xtype: 'fieldset',
			    title: 'Search SteenFind',
				items: [
					{
						xtype: 'textfield',
						placeHolder: 'Tom Sawyer',
						name: 'term',
					},
					{
						xtype: 'selectfield',
						name: 'limit',
						label: 'Limit:',
						options: [
							{text: 'All Fields', value: 'AllFields'},
							{text: 'Title', value: 'Title'},
							{text: 'Author', value: 'Author'},
							{text: 'Subject', value: 'Subject'},
							{text: 'Call Number', value: 'CallNumber'},
							{text: 'ISBN/ISSN', value: 'ISN'},
							{text: 'Tag', value: 'Tag'}
						]
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