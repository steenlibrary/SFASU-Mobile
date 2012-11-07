Ext.define('SFASU.controller.Radio.Listen', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			radio: 'radio_main',
			radioListen: 'radio_listen',
			radioAudio: 'radio_listen audio',
			playButton: 'radio_listen toolbar [name=play]',
			playStatus: 'radio_listen toolbar [name=status]',
			playVolume: 'radio_listen toolbar [name=volume]',
			volumePanel: 'radio_listen [name=volumepanel]',
			volumeSlider: 'radio_listen [name=volumeslider]'
		},
		control: {
			playButton: {
				tap: 'onPlayTap'
			},
			playVolume: {
				tap: 'onVolumeTap'
			},
			radioListen: {
				show: 'showRadioListen'
			},
			volumeSlider: {
				change: 'onVolumeSliderChange'
			}
		}
	},
	
	initialize: function() {
		//var src = 'http://144.96.209.9:8004/listen.pls';
		//this.media = new Media(src);
	},
	
	onVolumeSliderChange: function(me, Slider, thumb, newValue, oldValue, eOpts) {
		console.log('New Volume: ' + newValue);
		
		this.getRadioAudio().setVolume(newValue);
	},
	
	showRadioListen: function() {
		if(this.getRadioAudio().isPlaying()) {
			this.getPlayButton().setIconCls('pause');
			this.getPlayStatus().setHtml('Streaming...');
		} else {
			this.getPlayButton().setIconCls('play2');
			this.getPlayStatus().setHtml('Stopped.');
		}
	},
	
	onVolumeTap: function(button, event, eOpts) {
		console.log('onVolumeTap');

		if(this.getPlayVolume().getIconCls() == 'volume_up') {
			//this.media.play();
			this.getPlayVolume().setIconCls('volume_mute');
			this.getRadioAudio().setMuted(true);
			//this.getPlayStatus().setHtml('Streaming...');
		} else {
			this.getPlayVolume().setIconCls('volume_up');
			//this.getPlayStatus().setHtml('Stopped.');
			this.getRadioAudio().setMuted(false);
		}
	},
	
	onPlayTap: function(button, event, eOpts) {
		console.log('onPlayTap');
		
		//var audio = new Ext.Audio({
		 //         enableControls: false,
		   //       url: src,
		     //     loop: false,
		       //   scope: this
		      //});
		//audio.toggle();
		if(this.getPlayButton().getIconCls() == 'play2') {
			//this.media.play();
			this.getPlayButton().setIconCls('pause');
			this.getPlayStatus().setHtml('Streaming...');
		} else {
			this.getPlayButton().setIconCls('play2');
			this.getPlayStatus().setHtml('Stopped.');
		}
		
		console.log(this.getRadioAudio());
		this.getRadioAudio().toggle();
	}
});
