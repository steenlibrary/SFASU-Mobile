Ext.define('SFASU.view.Video', {

	extend: 'Ext.Container',
	xtype: 'videopane',

	config: {
		title: 'Video',
		
		tpl: [
			'<tpl for=".">',
				'<div class="header">',
					'<div style="background-image: url({thumbnail}); width:100%; height: 200px;"></div>',
					'<div class="video youtube">',
						//'<iframe class="youtube-player" type="text/html" width="640" height="385" ',
						//	'src="http://www.youtube.com/embed/{id}" frameborder="0"></iframe>',
					'</div>',
					'<h3>{title}</h3>',
				'</div>',
			'</tpl>'
		]
	}
});