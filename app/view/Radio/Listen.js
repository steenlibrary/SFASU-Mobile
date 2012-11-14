Ext.define('SFASU.view.Radio.Listen', {
	extend: 'Ext.Panel',
	xtype: 'radio_listen',
	
	requires: [
        'Ext.Audio',
		'Ext.form.Panel',
		'Ext.field.Slider'
    ],
	
	config: {
		title: 'Listen',
		iconCls: 'play_black1',
		items: [{
			xtype: 'panel',
			flex: 2,
			style: {
				backgroundImage: 'url(resources/images/ksau.png)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
			},
			html: '<div style="height:300px;">&nbsp;</div>'
		},
		{
			xtype: 'audio',
			url: 'http://144.96.209.9:8004/',
			hidden: true
		},
		
		{
			xtype: 'toolbar',
			ui: 'neutral',
			docked: 'bottom',
			
			defaults: {
				iconMask: true,
				ui: 'plain'
			},
			
			layout: {
				pack: 'center',
				align: 'center'
			},
			
			items: [{
				name: 'play',
				iconCls: 'play2',
			},
			{
				xtype: 'spacer'
			},
			{
				xtype: 'container',
				name: 'status',
				html: 'Press play.'
			},
			{
				xtype: 'spacer'
			},
			/*{
				name: 'volume',
				iconCls: 'volume_up',
				//text: 'Play'
			}*/
			]
		
		},
		{
			xtype: 'panel',
			name: 'volumepanel',
			//ui: 'neutral',
			docked: 'bottom',
			hidden: true,
			items: [
				{
					xtype: 'sliderfield',
					name: 'volumeslider',
					value: 50,
					minValue: 0,
					maxValue: 100
				}
			]
		},
		]
	}
});