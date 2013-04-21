Ext.define('SFASU.controller.AARC.Groups', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			aarc: 'aarc_main',
			group: 'aarc_main formpanel',
			axe: 'aarc_main [name=slidebutton]'
		},
		control: {
			'aarc_sigroups': {
				show: 'showGroups',
				itemtap: 'showGroup'
			}
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide({type: 'fadeOut'});
		}
	},
	
	showGroups: function() {
		Ext.getStore('AARC.Groups').load();
	},
	
	showGroup: function(list, index, element, record) {
		if(!this.getGroup()) {
			this.hideAxe();
			this.getAarc().push({
				xtype: 'formpanel',
				title: record.get('course'),
				items: [
					{
						xtype: 'fieldset',
						title: 'SI Group Info',
						items: [
							{
								xtype: 'textfield',
								label: 'Course',
								value: record.get('course'),
								readOnly: true
							},
							{
								xtype: 'textfield',
								label: 'Sections',
								value: record.get('section'),
								readOnly: true
							},
							{
								xtype: 'textfield',
								label: 'Instructor',
								value: record.get('professor'),
								readOnly: true
							},
							{
								xtype: 'textfield',
								label: 'Leader',
								value: record.get('leader'),
								readOnly: true
							},
							{
								xtype: 'textfield',
								label: 'Time',
								value: record.get('times'),
								readOnly: true
							},
							{
								xtype: 'textfield',
								label: 'Room',
								value: record.get('room'),
								readOnly: true
							}
						]
					}
				],
				scrollable: true,
				styleHtmlContent: true
			});
		}
	}
});
