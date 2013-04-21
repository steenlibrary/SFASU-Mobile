Ext.define("SFASU.view.Athletics.Sport.Main", {
    extend: 'Ext.tab.Panel',
	
	xtype: 'athletics_sport_main',
	
    requires: [
        'Ext.TitleBar'
    ],
	
    config: {
        tabBarPosition: 'bottom'
    },

	items:[
		
	],
	
	initialize: function() {
		console.log('initialize');
		this.callParent(arguments);
		console.log(this.initialConfig.record.get('newsFeed'));
		//alert(this.initialConfig.newsFeed);
		if(this.initialConfig.record.get('newsFeed')) {
			console.log('news feed');
			this.add({
				xtype: 'athletics_sport_news',
				store: {
					model: 'SFASU.model.Athletics.Sport.News',
			        autoLoad: true,
			        sorters: 'publishedDate',
				
					grouper: {
						sortProperty: 'publishedDate',
						direction: 'DESC',
			            groupFn: function(record) {
							return Ext.Date.format(record.get('publishedDate'), 'l, F j, Y');
			            }
			        },

					pageSize: 10,
			        proxy: {
			            type: 'jsonp',
			            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q='
								+ this.initialConfig.record.get('newsFeed'),

						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
			        }
				}
			});
		}
		//console.log(this.initialConfig.record);
		if(this.initialConfig.record.get('scheduleFeed')) {
			//console.log(this.initialConfig.record);
			console.log(this.initialConfig.record.get('scheduleFeed'));
			this.add({
				xtype: 'athletics_sport_schedule',
				store: {
					fields: [
						'id',
						'title', 
						'content', 
						'link', 
						{ name: 'publishedDate', type: 'date'}
					],
			        autoLoad: true,
			        sorters: 'publishedDate',
			
					grouper: {
						sortProperty: 'publishedDate',
						direction: 'DESC',
			            groupFn: function(record) {
							return Ext.Date.format(record.get('publishedDate'), 'l, F j, Y');
			            }
			        },

			        proxy: {
			            type: 'jsonp',
			            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q='
								+ this.initialConfig.record.get('scheduleFeed'),

						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
			        }
				}
			});
		}
		console.log(this.initialConfig.record.get('rosterFeed'));
		if(this.initialConfig.record.get('rosterFeed')) {
			//console.log(this.initialConfig.record);
			console.log(this.initialConfig.record.get('rosterFeed'));
			this.add({
				xtype: 'athletics_sport_roster',
				store: {
					fields: ['bio_id','last_name', 'first_name', 'number', 'position', 'details'],
			        autoLoad: true,
			        sorters: 'last_name',

			        grouper: {
			            groupFn: function(record) {
			                return record.get('last_name')[0];
			            }
			        },

			        proxy: {
			            type: 'jsonp',
			
						url: serverPath,
						
						extraParams: {
							feature: 'athletics_roster',
							sport: this.initialConfig.record.get('rosterFeed')
						},
						
						reader: {
							type: 'json',
							rootProperty: ''
						}
			        }
				}
			});
		}
	}
});
