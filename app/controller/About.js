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
		//Ext.Viewport.mask();
		console.log('sendSupport');
		var supportName = this.getSupportName().getValue(),
			supportEmail = this.getSupportEmail().getValue(),
			supportComment = this.getSupportComment().getValue();
		
		console.log('supportName: ' + supportName);
		/*
		Ext.data.JsonP.request({
			url: 'https://library.sfasu.edu/mobile/support.php',
			
			callbackKey: 'callback',
			
			params: {
				supportName: supportName,
				supportEmail: supportEmail,
				supportComment: supportComment
			},
			
			success: function(result, request) {
				Ext.Viewport.unmask();
				console.log(result);
				var status = result.data.status;
				if (status) {
					
				}
		   }
		});
		*/
	}
});
