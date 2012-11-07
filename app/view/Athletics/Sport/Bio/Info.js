Ext.define('SFASU.view.Athletics.Sport.Bio.Info', {

	extend: 'Ext.List',
	xtype: 'athletics_sport_bio_info',

	config: {
		disableSelection: true,
		store: {
			autoLoad: true,
			fields: ['type', 'data'],
			data: [
			]
		},
		itemTpl: '<b>{type}:</b> {data}',
	}
});
