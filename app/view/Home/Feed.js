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
			//iconCls: 'home',
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
					flex: 1
				},
				
				{
					xtype: 'dataview',
					style: 'background-color: #000;',
					flex: 2,
					store: 'Home.Feed',
					grouped: true,

				    emptyText: '<p class="no-searches">There was an error loading what\'s new.</p>',
					//cls: 'personInfo',
				    //itemTpl: '<img src="{image}" style="float: left; padding-right: 5px;" width="30%" /> {title}'
					itemTpl: [
						'<tpl for=".">',
							'<div style="width:50%; height:145px;',
								'background-repeat:no-repeat;',
								'<tpl switch="imageOrientation">',
									'<tpl case="portrait">',
										'background-size: 100% auto;',
										'background-position:center center;',
									'<tpl case="landscape">',
										'background-size: auto 100%;',
										'background-position:center center;',
								'</tpl>',
								'<tpl switch="type">',
									'<tpl case="twitter">',
										'background-color: #999;',
										'background-position:bottom right;',
									'<tpl case="video">',
										'background-image: url({image});',
										//'background-size: 150%;',
										//'background-position:center center;',
									'<tpl default>',
										'background-image: url({image});',
										//'background-size: 100%;',
										//'background-position:center center;',
								'</tpl>',
								'float:left;">',
							'<div class="homeCaption">',
								'<span style="text-transform:capitalize;">{type}</span>',
								'<h2>{publishedDate:date("F j, Y")}</h2>',
								'<tpl switch="type">',
									'<tpl case="twitter">',
								    '<div class="avatar" style="background-image: url({image});"></div>',
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