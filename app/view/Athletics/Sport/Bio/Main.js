Ext.define('SFASU.view.Athletics.Sport.Bio.Main', {

	extend: 'Ext.Panel',
	xtype: 'athletics_sport_bio_main',

	config: {
		layout: 'vbox',
		//scrollable: 'vertical',
		
		items: [
			{
				xtype: 'athletics_sport_bio_plaque',
			},
			{
				xtype: 'list',
				items: [
					{
						xtype: 'listitemheader',
						cls: 'dark',
						html: 'Bio'
					}
					
				]
			},
			{
				scrollable: true,
				xtype: 'athletics_sport_bio_info',
				flex: 3
			},
			{
				xtype: 'list',
				items: [
					{
						xtype: 'listitemheader',
						cls: 'dark',
						html: 'Hometown'
					}
				]
			}
		]
	}
});
