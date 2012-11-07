Ext.define('SFASU.controller.Videos', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			videos: 'videos',
			video: 'videopane'
		},
		control: {
			'videos list': {
				itemtap: 'onVideoTap'
			}
		}
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
		/*this.getVideos().push({
			xtype: 'panel',
			title: record.get('title'),
			items: [{
				xtype: 'video',
				url: ['http://www.youtube.com/watch?v=' + record.get('id') + '&feature=player_embedded'],
				loop: false,
				posterUrl: record.get('thumbnail')
			}]
		});*/
		
		this.getVideos().push({
			xtype: 'videopane',
			title: record.get('title')
		});
		this.getVideo().setRecord(record);
	}
});
