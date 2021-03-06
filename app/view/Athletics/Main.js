Ext.define("SFASU.view.Athletics.Main", {
    
	extend: 'Ext.navigation.View',
	
    requires: [
        'Ext.TitleBar'
    ],

	xtype: 'athletics_main',
	
    config: {
		//useTitleForBackButtonText: true,
		
		items: [{
			xtype: 'list',
			title: 'SFA Athletics',
			//tabBarPosition: 'bottom',
			itemTpl: '{name}',
			grouped: true,
			
	        store: {
				autoLoad: true,
				
				grouper: {
					sortProperty: 'group_index',
		            groupFn: function(record) {
						var types = {
							'men': 'Men\'s Sports',
							'women':'Women\'s Sports',
							'combined':'Combined Sports',
							'general': 'What\'s New'
						};
		                return types[record.get('type')];
		            }
				},
				
				fields: ['group_index', 'name', 'id', 'type', 'newsFeed', 'scheduleFeed', 'rosterFeed'],
				
				data: [
					// Top Items
					{
						group_index: 0,
						name: 'Top Stories', 
						id: 'athletics_news', 
						type: 'general', 
						newsFeed: 'http://sfajacks.cstv.com/headline-rss.xml'
					},
					{
						group_index: 0,
						name: 'Top Events & Scores', 
						id: 'athletics_events', 
						type: 'general',
						newsFeed: 'http://sfajacks.cstv.com/headline-rss.xml'
					},

					// Men's Sports
			   		{
						group_index: 1,
						name: 'Football', 
						id: 'athletics_football_main', 
						type: 'men',
						newsFeed: 'http://sfajacks.cstv.com/sports/m-footbl/headline-rss.xml',
						scheduleFeed: 'http://rivals.yahoo.com/ncaa/football/teams/sst/calendar/rss.xml',
						rosterFeed: 'm-footbl'
					},
			        {
						group_index: 1,
						name: 'Basketball', 
						id: 'athletics_basketball_main', 
						type: 'men',
						newsFeed: 'http://sfajacks.cstv.com/sports/m-baskbl/headline-rss.xml',
						scheduleFeed: 'http://sports.yahoo.com/ncaab/teams/scc/calendar/rss.xml',
						rosterFeed: 'm-baskbl'
					},
			        {
						group_index: 1,
						name: 'Baseball', 
						id: 'athletics_baseball_main', 
						type: 'men',
						newsFeed: 'http://sfajacks.cstv.com/sports/m-basebl/headline-rss.xml',
						rosterFeed: 'm-basebl'
					},
					{
						group_index: 1,
						name: 'Golf', 
						id: 'athletics_golf_main', 
						type: 'men',
						newsFeed: 'http://sfajacks.cstv.com/sports/m-golf/headline-rss.xml',
						rosterFeed: 'm-golf'
					},

					// Women's Sports
			        {
						group_index: 2,
						name: 'Basketball', 
						id: 'athletics_w_basketball_main', 
						type: 'women',
						newsFeed: 'http://sfajacks.cstv.com/sports/w-baskbl/headline-rss.xml',
						scheduleFeed: 'http://sports.yahoo.com/ncaaw/teams/scc/calendar/rss.xml',
						rosterFeed: 'w-baskbl'
					},
					{
						group_index: 2,
						name: 'Softball', 
						id: 'athletics_w_softball_main', 
						type: 'women',
						newsFeed: 'http://sfajacks.cstv.com/sports/w-softbl/headline-rss.xml',
						rosterFeed: 'w-softbl'
					},
					{
						group_index: 2,
						name: 'Soccer', 
						id: 'athletics_w_soccer_main', 
						type: 'women',
						newsFeed: 'http://sfajacks.cstv.com/sports/w-soccer/headline-rss.xml',
						rosterFeed: 'w-soccer'
					},
					{
						group_index: 2,
						name: 'Tennis', 
						id: 'athletics_w_tennis_main', 
						type: 'women',
						newsFeed: 'http://sfajacks.cstv.com/sports/w-tennis/headline-rss.xml',
						rosterFeed: 'w-tennis'
					},
					{
						group_index: 2,
						name: 'Volleyball', 
						id: 'athletics_w_volleyball_main', 
						type: 'women',
						newsFeed: 'http://sfajacks.cstv.com/sports/w-volley/headline-rss.xml',
						rosterFeed: 'w-volley'
					},
					{
						group_index: 2,
						name: 'Golf', 
						id: 'athletics_w_golf_main', 
						type: 'women',
						newsFeed: 'http://sfajacks.cstv.com/sports/w-golf/headline-rss.xml',
						rosterFeed: 'w-golf'
					},
					{
						group_index: 2,
						name: 'Bowling', 
						id: 'athletics_w_bowling_main', 
						type: 'women',
						newsFeed: 'http://sfajacks.cstv.com/sports/w-bowl/headline-rss.xml',
						rosterFeed: 'w-bowling'
					},

					// Combined Sports
					{
						group_index: 3,
						name: 'Track', 
						id: 'athletics_c_track_main', 
						type: 'combined',
						newsFeed: 'http://sfajacks.cstv.com/sports/c-track/headline-rss.xml',
						rosterFeed: 'c-track'
					},
					{
						group_index: 3,
						name: 'Cross Country', 
						id: 'athletics_c_crosscountry_main', 
						type: 'combined',
						newsFeed: 'http://sfajacks.cstv.com/sports/c-xc/headline-rss.xml',
						rosterFeed: 'c-xc'
					}
			    ]
			}
		}]
    }
});
