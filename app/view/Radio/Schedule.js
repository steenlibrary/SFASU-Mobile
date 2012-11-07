Ext.define('SFASU.view.Radio.Schedule', {
	extend: 'Ext.Panel',
	xtype: 'radio_schedule',
	
	config: {
		title: 'Schedule',
		iconCls: 'time',
		scrollable: true,
		styleHtmlContent: true,
			
		html: 'KSAU 90.1 is on the air 7-days a week*'
			+' from 10:00am - 2:00am central standard time.'
	}
});