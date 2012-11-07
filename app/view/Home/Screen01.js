Ext.define('SFASU.view.Home.Screen01', {
	
	extend: 'Ext.Panel',
	
	xtype: 'screen01',
	
	config: {
		title: 'SFASU Mobile',
		iconCls: 'home',
		layout: {
			type: 'vbox',
			//align: 'start',
			pack: 'start'
		},
		style: 'background-color: #000;',
		defaults: {flex: 1},
		items: [
			{
				xtype: 'whatsnew',
				ui: 'light',
				flex: 1.5
			},
			{
				xtype: 'homescreen_news',
				ui: 'light',
			},
			{
				xtype: 'panel',
				layout: {
				        type: 'hbox',
				        align: 'start',
				        pack: 'center'
				},
				flex: 1,
				defaults: {
					iconAlign: 'top',
					iconMask: true,
					//height: '100%',
					//width: '33%',
					//flex: 1,
					height: 85,
					flex: 1,
				},
				items: [
					{
						xtype: 'button',
						id: 'news',
						ui:'plain',
						//text: 'News', 
						//margin: 0,
						//flex: 1,
						//cls: 'btnAction',
						//style: 'background-image: url("resources/images/news-75.png");',
						//height: 75,
						//width: 100,
						badgeText: '15',
						//iconCls: 'layout',
						//src: 'resources/images/news.png',
						/*
						style: {
							'vertical-align': 'bottom',
						    background: 'red'
						}
						*/
						html: 'News',
					},
					{
						xtype: 'button',
						id: 'events',
						text: 'Events',
						//cls: 'btnTraditions',
						//margin: 7,
						//flex: 1,
						//height: 80,
						//width: 75,
						iconAlign: 'top',
						iconCls: 'calendar2',
						iconMask: true,
						badgeText: '21',
						html: 'Events',
					},
					{
						xtype: 'button',
						id: 'traditions',
						cls: 'btnTraditions',
						text: 'Traditions', 
						//margin: 7,
						//flex: 1,
						//height: 80,
						//width: 75,
						//iconCls: 'axe_em',
						html: 'Traditions',
					}
				]
			},
			
			{
				xtype: 'panel',
				layout: {
				        type: 'hbox',
				        align: 'start',
				        pack: 'center'
				},
				flex: 1,
				defaults: {
					iconAlign: 'top',
					iconMask: true,
					height: 85,
					flex: 1,
				},
				items: [
					{
						xtype: 'button',
						id: 'library_main',
						text: 'Library', 
						cls: 'btnLibrary',
						//margin: 7,
						//flex: 1,
						//height: 80,
						//width: 75,
						//iconCls: 'bookmarks',
					},
					{
						xtype: 'button',
						id: 'athletics_main',
						text: 'Athletics', 
						cls: 'btnAthletics',
						//margin: 7,
						//flex: 1,
						//height: 80,
						//width: 75,
						//iconCls: 'team'
					},
					{
						xtype: 'button',
						id: 'maps',
						text: 'Maps',
						//iconAlign: 'center',
						//margin: 7,
						//flex: 1,
						//height: 80,
						//width: 75,
						iconCls: 'maps',
					}
				]
			},
			{
				xtype: 'panel',
				layout: {
					type: 'hbox',
				    align: 'start',
				    pack: 'center'
				},
				flex: 1,
				defaults: {
					iconAlign: 'top',
					iconMask: true,
					height: 85,
					flex: 1,
				},
				items: [
					{
						xtype: 'button',
						id: 'courses',
						text: 'Courses', 
						//margin: 7,
						//flex: 1,
						//height: 80,
						//width: 75,
						iconCls: 'compose'
					},
					{
						xtype: 'button',
						id: 'directory_main',
						text: 'Directory', 
						cls: 'btnDirectory',
						//margin: 7,
						//flex: 1,
						//height: 80,
						//width: 75,
						//iconCls: 'user_list'
					},
					{
						xtype: 'button',
						id: 'videos',
						text: 'Videos', 
						//margin: 7,
						//flex: 1,
						//height: 80,
						//width: 75,
						iconCls: 'play_black1',
					}
				]
			}
        ]
	}
});