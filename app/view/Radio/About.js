Ext.define('SFASU.view.Radio.About', {
	extend: 'Ext.Panel',
	xtype: 'radio_about',
	
	config: {
		title: 'About',
		iconCls: 'info',
		scrollable: true,
		styleHtmlContent: true,
			
		html: 'KSAU 90.1 FM is a student run radio station'
			+ ' for students pursuing a degree in the radio/television' 
			+ ' field within the Global Media & Contemporary Cultures'
			+ ' department at Stephen F. Austin State University in'
			+ ' Nacogdoches, Texas. Our station broadcasts at 3500-watts'
			+ ' and is a non-commercial radio station on the FM frequency, 90.1.'
	}
});