Ext.define('SFASU.controller.Courses', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			courses: 'courses',
		},
		control: {
			'courses list': {
				itemtap: 'showLink',
				//show: 'hideBadge'
				
				//disclose: 'showStory',
			}
		}
	},
	
	showLink: function(list, index, element, record) {
		console.log('showLink: ' + record.get('url'));
		Ext.util.openLink(record.get('url'));
	}
});
