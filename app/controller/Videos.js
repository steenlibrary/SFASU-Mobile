Ext.define('SFASU.controller.Videos', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			videos: 'videos_main',
			video: 'videopane',
			videoPlay: 'videopane img',
			axe: 'videos_main [name=slidebutton]'
		},
		control: {
			videos: {
				pop: 'showAxe'
			},
			'videos_phone': {
				itemtap: 'onVideoTap'
			},
			'videos_tablet': {
				itemtap: 'onVideoTap'
			},
			videoPlay: {
				tap: 'playVideo'
			}
		}
	},
	
	showAxe: function() {
		if(this.getAxe()) {
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide({type: 'fadeOut'});
		}
	},
	
	playVideo: function() {
		console.log('play video');
	},
	
	onVideoTap: function(list, idx, el, record) {
		var url = 'http://www.youtube.com/embed/' + record.get('id');
		openLink(url);
	},

	showVideo: function(list, index, element, record) {
		if(!this.getVideo()) {
			this.hideAxe();
		
			this.getVideos().push({
				xtype: 'videopane',
				title: record.get('title')
			});
			
			this.getVideo().setRecord(record);
		}
	}
});
