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
			'videos_phone': {
				itemtap: 'showVideo'
			},
			'videos_tablet': {
				itemtap: 'showVideo'
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
		//var url = 'http://www.youtube.com/watch?v=' + record.get('id') + '&feature=player_embedded&autoplay=true';
		var url = 'http://www.youtube.com/embed/' + record.get('id');
		if(childBrowser) {
			childBrowser.showWebPage(url);
		} else {
			Ext.Msg.confirm('External Link', 'Open in YouTube?', function(result){
	            if (result == 'yes') {
	                window.location = url;
	            }
	        });
		}
		
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
