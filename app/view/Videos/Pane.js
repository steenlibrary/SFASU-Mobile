Ext.define('SFASU.view.Videos.Pane', {

	extend: 'Ext.Panel',
	xtype: 'videopane',

	config: {
		title: 'Video',
		//styleHtmlContent: true,
		scrollable: true,
		
		tpl: [
			'<tpl for=".">',
				'<div class="header">',
					'<h3>{title}</h3>',
					'Uploaded: {publishedDate:date("F j, Y")}<br/>',
					'<tpl if="duration != null">Duration: {duration}</tpl>',
				'</div>',
				'<img src="{thumbnail}" width="100%"/>',
			'</tpl>'
		],
		
		items:[{
			xtype: 'button',
			text: 'test'
			
		}],
	}
});