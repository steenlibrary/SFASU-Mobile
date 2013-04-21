Ext.define('SFASU.view.Home.Feed', {
	
	extend: 'Ext.navigation.View',
	
	xtype: 'feed',
	
	config: {
		
		navigationBar: {
			items: [{
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
			}]
		},
		
		items:[{
			xtype: 'panel',
			title: 'What\'s New',
			
			layout: {
				type: 'vbox'
			},
			
			style: 'background-color: #000;',
			
			items: [{
				xtype: 'whatsnew',
				ui: 'light'
				//height: '100px'
				//flex: (Ext.os.is.Phone ? 2 : 3)
			},{
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
							'background-repeat:no-repeat;position:relative;border-right:1px solid #504f4d;',
							'<tpl switch="type">',
								'<tpl case="twitter">',
									'background-color: #999;',
									'background-image: url(resources/images/new_twitter_logo.jpg);',
									'background-size: 100%;',
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
								
								//'<p>{title}</p>',
							'</div>',
							'<div style="padding: 5px;position:absolute;bottom:0px;',
								'background: rgb(0, 0, 0);background:rgba(0,0,0,.8);',
								'border-bottom:1px solid #504f4d;',
								'color:#fff;width:100%;',
								'font-size:' + (Ext.os.is.Phone ? '60%' : '100%') + ';">',
							'<tpl switch="type">',
								'<tpl case="twitter">',
							   	'<div class="avatar" style="background-image: url({image});"></div>',
								'<span>@{postedBy}: </span>',
							'</tpl>',
							'{title}',
							'</div>',
						'</div>',
					'</tpl>'
				]
			}]
		}]
	}
});