Ext.define('SFASU.view.Traditions', {
	extend: 'Ext.navigation.View',
	xtype: 'traditions',
	
	requires: [
        'Ext.carousel.Carousel'
    ],
	
	config: {
		items: [{
			xtype: 'tabpanel',
			direction: 'vertical',
			title: 'SFA Traditions',
			tabBarPosition: 'bottom',
			style: {
				background: 'black'
			},
			//styleHtmlContent: true,
			items: [
				{
					title: 'Namesake',
					xtype: 'traditions_panel',
					cls: 'steveBackground',
					items: [
						{
							xtype: 'container',
							flex: 3
						},
						{
							xtype: 'panel',
							flex: 2,
							scrollable: true,
							cls: 'traditions_card',
							html: '<h2>Stephen F. Austin</h2><p>Stephen Fuller Austin,'
								+' known to many as the "Father of Texas," led the first'
								+' organized group of immigrants from the United States'
								+' into Texas during the 1820s. Stephen F. Austin\'s visage'
								+' has been immortalized on the SFA campus in a bronze'
								+' fountain affectionately referred to by students as'
								+' "Surfin\' Steve," as the statue\'s positioning atop the'
								+' fountain does look a bit like Mr. Austin is catching a wave.</p>',
						}

					]
				},
				{
					title: 'Lumberjack',
					xtype: 'traditions_panel',
					cls: 'lumberjackBackground',

					items:[
						{
							xtype: 'container',
							flex: 3,
						},
						{
							xtype: 'panel',
							flex: 2,
							scrollable: true,
							cls: 'traditions_card',
							html: '<h2>The Lumberjack</h2><p>In 1923 the students and faculty'
								+' met in assembly to decide on a name for the athletic teams.'
								+' Several names were considered, and those proposing the names'
								+' led yells to demonstrate the fitness of their nominations.'
								+' By vote, the assembly chose LUMBERJACKS, the name submitted'
								+' by T.E. Ferguson, professor of English. The Lumberjack seemed'
								+' to fit as mascot of SFA because of our central location in the'
								+' Piney Woods of East Texas. Only one other four institution'
								+' touts the Lumberjack as their mascot.</p>',
						}
					]
				},
				{
					title: 'Axe',
					xtype: 'traditions_panel',
					cls: 'handAxeBackground',

					items:[
						{
							flex: 3,
						},
						{
							xtype: 'panel',
							flex: 2,
							scrollable: true,
							cls: 'traditions_card',
							html: '<h2>The Axe</h2>'
								+'<p>The Axe is the tool or weapon of choice of the Lumberjack.'
								+' To the members of the SFA community, it has dualistic'
								+' association, in this case representing both destruction'
								+' and creation. American Indians, the Chinese and even the'
								+' Celts called axes "thunder stones." As such, axes became'
								+' closely associated with power.</p>',
						}
					]
				}
			]
		}]
	}
});