Ext.define('SFASU.view.Home.Feed', {
	
	extend: 'Ext.navigation.View',
	
	xtype: 'feed',
	
	config: {
		
		navigationBar: {
			items: [
				{
					xtype: 'button',
					id: 'alertButton',
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
		
		items:[{
			xtype: 'panel',
			title: 'What\'s New',
			layout: {
				type: 'vbox',
				//align: 'start',
				//pack: 'start'
			},
			style: 'background-color: #000;',
			//defaults: {flex: 1},
			items: [
				{
					xtype: 'whatsnew',
					ui: 'light',
					flex: (Ext.os.is.Phone ? 2 : 3)
				},
				
				{
					xtype: 'dataview',
					style: 'background-color: #000;',
					flex: 5,
					store: 'Home.Feed',
					grouped: true,

				    emptyText: '<p class="no-searches">There was an error loading what\'s new.</p>',
				
					itemTpl: [
						'<tpl for=".">',
							'<div style="width:50%;',
								'height: ' + (Ext.os.is.Phone ? '145' : '300') + 'px;',
								'background-repeat:no-repeat;',
								'<tpl switch="type">',
									'<tpl case="twitter">',
										'background-color: #999;',
										//'background-position:bottom right;',
									'<tpl default>',
										'background-image: url({image});',
								'</tpl>',
								'<tpl switch="imageOrientation">',
									'<tpl case="portrait">',
										'background-size: 100% auto;',
										'background-position:center center;',
									'<tpl case="landscape">',
										'background-size: auto 100%;',
										'background-position:center center;',
								'</tpl>',
								'float:left;">',
							'<div class="homeCaption ' + (Ext.os.is.Phone ? '' : 'homeCaptionTablet') + '">',
								'<span style="text-transform:capitalize;">{type}</span>',
								'<h2>{publishedDate:date("F j, Y")}</h2>',
								'<tpl switch="type">',
									'<tpl case="twitter">',
								    '<div class="avatar" style="background-image: url({image});"></div>',
									'<span>@{postedBy}: </span>',
								'</tpl>',
								'<p>{title}</p>',
							'</div>',
							'</div>',
						'</tpl>'
					]
				}
	        ]
		}]
	}
});