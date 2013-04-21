Ext.define('SFASU.view.Traditions.More', {

    extend: 'Ext.List',

    xtype: 'traditions_more',
	
	config: {
		title: 'More',
		iconCls: 'more',
        itemTpl: '{name}',
		
		store: {
			autoLoad: true,
			
			fields: ['name', 'description'],
			
			data: [{
				name: 'The Stone Fort Museum',
				description: 'In the spring of 1779, Antonio Gil Y\'Barbo led some'
					+ ' displaced settlers back to East Texas to found the community'
					+ ' of Nacogdoches. They had formerly lived in western Louisiana'
					+ ' and eastern Texas near Spanish missions. Soon after leading'
					+ ' his wanderers to the valley of LaNana and Banita Bayous,'
					+ ' Y\'Barbo erected a Stone house on the northeast corner of town'
					+ ' square. There he conducted private and government business, so'
					+ ' it became the civic center of the community. In 1936, a replica'
					+ ' of the Old Stone Fort was located on the campus of SFA.'
			},{
				name: 'Ole Cotton',
				description: 'At every home football game, the SFA ROTC introduces the'
					+ ' opposing team to Ole Cotton. Each time the Lumberjacks score,'
					+ ' Ole Cotton is fired. The sound booms through the stadium and the'
					+ ' town. If you have never been to a game, but you\'ve heard the'
					+ ' booms, don\'t worry. It\'s just those Lumberjacks kickin\' some axe.'
			},{
				name: 'Lighting of Garner and Student Center',
				description: 'It is possible that a student might have to miss an athletic'
					+ ' event due to the need to study for a more important final or midterm.'
					+ ' To let those who are unable to attend know of our victory, SFA has'
					+ ' purple lights visible on top of one of the tallest buildings on campus,'
					+ ' Steen Hall. A purple light also is illuminated in the Student Center'
					+ ' clock tower. After every SFA game, the students of SFA and the residents'
					+ ' of Nacogdoches can look to the purple lights on campus and rejoice in our victory.'
					+ '* Garner Apartments was the home to the victory light for over 40 years'
					+ ' until the light was moved to Steen Hall in Fall 2010.'
			},{
				name: 'Homecoming',
				description: 'Homecoming features the best of what SFA is all about. Held every fall,'
					+ ' usually in October, homecoming is not just one tradition, but a series of'
					+ ' traditions that bring Lumberjacks one and all together to celebrate SFA.'
					+ ' During the week, the campus welcomes home its alumni and friends with the'
					+ ' traditional bonfire and pep rally, homecoming elections, Duck Dash, downtown'
					+ ' parade, football game, and much, much more!'
			},{
				name: 'Purple Haze',
				description: 'Purple Haze, a tradition created by a group of student leaders, is more'
					+ ' than a section of students at the football game. Purple Haze is a commitment'
					+ ' and dedication to the Lumberjack spirit. Each freshman who attends orientation'
					+ ' is given a Purple Haze shirt that displays the SFA school song across the back.'
			},{
				name: 'The SFA Mentor Ring',
				description: 'The Mentor Ring is SFA\'s official class ring. Students receive the ring'
					+ ' in a ceremony called the Big Dip. The Big Dip signifies one of the last steps to'
					+ ' alumni-hood as students get their hands dipped purple and are presented with their'
					+ ' mentor ring. Once they have their ring, they will be paired with an SFA mentor who'
					+ ' will make sure their last months at SFA are on the right track to graduation and beyond.'
			},{
				name: 'Watermelon Bash',
				description: 'Each summer the Student Government Association host the Watermelon Bash. This'
					+ ' event signales the end of the summer and allows students a chance to let loose while'
					+ ' university administrators serve watermelon. The Watermelon Bash is SGA\'s oldest'
					+ ' standing tradition.'
			},{
				name: 'Springfest',
				description: 'Closing out the year is the last real party of the spring semester, and it\'s held'
					+ ' right on campus. Springfest is sponsored by the Student Activities Association and features'
					+ ' bands, in?atable games, free food and drinks, and thousands of dollars in prizes and free'
					+ ' stuff. Springfest is held over a one-week period, usually at the end of April.'
			},{
				name: 'Chief Caddo',
				description: 'Chief Caddo stands 7 feet 6 inches in height, weighs over 320 pounds and is the'
					+ ' largest symbol passed between NCAA universities in the nation. The statue is awarded'
					+ ' annually to the winner of the Lumberjack-Demon contest. The statue originated in 1960'
					+ ' when longtime rivals SFA and Northwestern State decided to award the winner of the game'
					+ ' a trophy. The two institutions settled on a statue of a mythical Indian chief whose tribe'
					+ ' was fabled to be responsible for settling the locations that became English-speaking'
					+ ' Nacogdoches and Natchitoches.'
			},{
				name: 'Parent\'s Day',
				description: 'Clean out the fridge, and don\'t do laundry. This weekend has been set aside to'
					+ ' invite the families of SFA students to campus to see how their students are surviving.'
					+ ' Sponsored by the Residence Hall Association, this event draws nearly 2,000 parents and'
					+ ' friends to the campus for a weekend of entertainment provided by the Student Activities'
					+ ' Association, tours of campus and college students looking for a trip to Wal-Mart or a'
					+ ' great meal out on the town with their parents.'
			}]
		}
    }
});