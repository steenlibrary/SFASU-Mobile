Ext.define('SFASU.controller.About', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			about: 'about',
			support: 'about formpanel',
			supportName: 'about formpanel [name=name]',
			supportEmail: 'about formpanel [name=email]',
			supportComment: 'about formpanel [name=comment]',
			gitHubButton: 'about [name=github]',
		},
		control: {
			gitHubButton: {
				tap: 'gitHubAction'
			},
			'about formpanel button': {
				tap: 'sendSupport'
			},
			'about formpanel': {
				submit: 'sendSupport'
			}
		}
	},
	
	gitHubAction: function(button, event, eOpts)  {		
		Ext.util.openLink(button.config.url);
	},

	sendSupport: function() {
		var supportName = this.getSupportName().getValue(),
			supportEmail = this.getSupportEmail().getValue(),
			supportComment = this.getSupportComment().getValue();
		
		Ext.data.JsonP.request({
			
			url: 'https://library.sfasu.edu/mobile/data/index.php',
			
			callbackKey: 'callback',
			
			params: {
				feature: 'contact',
				deviceType: Ext.os.deviceType,
				deviceVersion: Ext.os.version,
				supportName: supportName,
				supportEmail: supportEmail,
				supportComment: supportComment
			},
			
			success: function(result, request) {
				Ext.Viewport.unmask();
				console.log(result);
				var status = result.status;
				if (status && (status.indexOf('success') > -1)) {
					console.log('success');
					Ext.Msg.alert('Thank You!', 'Thank you for your feedback.'
						+'  We are reviewing your comments and will contact you ASAP.', Ext.emptyFn);
				} else {
					console.log('error');
					Ext.Msg.alert('Error', 'There was an error sending your support request.'
						+'  Please try again or e-mail us directory at: libwebdev@sfasu.edu', Ext.emptyFn);
				}
		   }
		});
	}
});