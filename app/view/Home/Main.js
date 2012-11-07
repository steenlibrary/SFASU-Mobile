var dashItems = [
	{
		id: 'News', 
		label: 'News', 
		icon: 'resources/images/news-75.png', 
		link: 'News'
	},
	{
		id: 'Events', 
		label: 'Events', 
		icon: 'resources/images/events-75.png', 
		link: 'Events'
	},
];

Ext.define('SFASU.view.Home.Main', {
	//extend: 'Ext.Carousel',
	extend: 'Ext.navigation.View',
	xtype: 'homescreen',
	
	requires: [
        'Ext.carousel.Carousel',
		'Ext.Img'
    ],
	
	config: {
		//defaultBackButtonText: 'Home',
		//useTitleForBackButtonText: false,
		showAnimation: 'fadeIn',
		hideAnimation: 'fadeOut',
		navigationBar: {
			items: [
				{
					xtype: 'panel',
					id: 'homeLogo',
					width:'225',
					height:'45',
					cls: 'sfasuToolbar',
					html: '<div style="width:225px;height:45px;">&nbsp;</div>',
					align: 'center'
					/*items: [{
						xtype: 'image',
						id: 'homeLogo',
						src: 'resources/images/logo.png',
						height: 45,
						width: 200,
						centered: false,
						hidden: false,
						align: 'middle'
						//html: 'test'
					}]
					*/
					
					
				},
				{
					xtype: 'button',
					id: 'favoriteButton',
					ui: 'plain',
					iconCls: 'user_add',
					iconMask: true,
					align: 'right',
					hidden: true,
					hideAnimation: Ext.os.is.Android ? false : {
						type: 'fadeOut',
						duration: 200
					},
					showAnimation: Ext.os.is.Android ? false : {
						type: 'fadeIn',
						duration: 200
					}
				},
				{
					xtype: 'button',
					id: 'linkButton',
					ui: 'plain',
					iconCls: 'action',
					iconMask: true,
					align: 'right',
					hidden: true,
					hideAnimation: Ext.os.is.Android ? false : {
						type: 'fadeOut',
						duration: 200
					},
					showAnimation: Ext.os.is.Android ? false : {
						type: 'fadeIn',
						duration: 200
					}
				},
				{
					xtype: 'button',
					id: 'alertButton2',
					ui: 'plain',
					iconCls: 'warning_black',
					iconMask: true,
					align: 'right',
					hidden: true,
					hideAnimation: Ext.os.is.Android ? false : {
						type: 'fadeOut',
						duration: 200
					},
					showAnimation: Ext.os.is.Android ? false : {
						type: 'fadeIn',
						duration: 200
					}
				}
			]
		},
		items: [
				{
					title: '',
					xtype: 'screen03'
				},
		/*
			{
				title: '',
				id: 'homeCarousel',
				xtype: 'carousel',
				cls: 'homeBackground',
				//ui: 'light',
				items: [
				
					{
						xtype: 'dataview',
						store: {
					        fields: ['icon', 'label','id', 'link'],
					        data: dashItems
					    },
						scrollable: false,
						itemTpl: '<div align="center" style="float"><img src="{icon}" title="{label}" width="75" height="75" /><br/><span style="color: white;font-size: 13px; font-weight:bold;">{label}</span></div>'
					},
				
					{
						xtype: 'screen01'
					},
					{
						xtype: 'screen02'
					},
					{
						xtype: 'panel',
						html: '<img width="100%" src="http://www.sfasu.edu/images/jacks-charge.jpg"/>'
					}
				]
			}
			*/
			
        ]
	}
});