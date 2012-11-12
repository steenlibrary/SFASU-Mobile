Ext.define('SFASU.view.Directory.Person.Info', {

	extend: 'Ext.Container',
	xtype: 'directory_person_info',

	config: {

		cls: 'personInfo',
		tpl: [
			'<tpl for=".">',
				'<div class="header">',
					'<div class="avatar" style="background-image: url(http://www.sfasu.edu/directory/uploads/{personId}.jpg);"></div>',
					'<h3>{firstname} {lastname}</h3>',
					'<h4>{role}, {department}</h4>',
					//'{personId}',
				'</div>',
			'</tpl>'
		]
	}
});
