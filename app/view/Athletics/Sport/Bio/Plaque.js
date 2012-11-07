Ext.define('SFASU.view.Athletics.Sport.Bio.Plaque', {

	extend: 'Ext.Container',
	xtype: 'athletics_sport_bio_plaque',

	config: {

		cls: 'personInfo',
		tpl: [
			'<tpl for=".">',
				'<div class="header">',
					'<div class="avatar" style="background-image: url({photo_url});"></div>',
					'<h3>{first_name} {last_name} <tpl if="player_number != null">(#{player_number})</tpl></h3>',
					'<h4>{position_event}&nbsp;</h4>',
				'</div>',
			'</tpl>'
		]
	}
});