Ext.define('SFASU.controller.Athletics.Sport.Bio.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homescreen: 'homescreen',
			bio: 'athletics_sport_bio_main',
			linkButton: 'homescreen #linkButton'
		},
		control: {
			'homescreen #linkButton': {
				tap: 'linkAction'
			},
			'athletics_sport_bio_main': {
				show: 'showLinkButton',
				hide: 'hideLinkButton'
			}
		}
	},
	
	showLinkButton: function(button, event, eOpts) {
		//console.log(this.getBio().config);
		if(this.getBio().config.bio_page) {
			//this.getLinkButton().enable();
			//this.getLinkButton().show();
		}
	},
	
	hideLinkButton: function(button, event, eOpts) {
		if(this.getBio().config.bio_page) {
			//this.getLinkButton().disable();
			//this.getLinkButton().hide();
		}
	},
	
	linkAction: function(button, event, eOpts) {
		if(this.getBio().config.bio_page) {
			//console.log('linkAction');
			//window.open(this.getBio().config.bio_page, "_blank");
			Ext.util.openLink(this.getBio().config.bio_page);
		}
	}
});
