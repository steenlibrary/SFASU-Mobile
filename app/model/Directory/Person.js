Ext.define('SFASU.model.Directory.Person', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
			{ name: "id" },
			{ name: "personId", type: "string" },
			{ name: "firstname", type: "string" },
			//'firstname',
			{ name: "lastname", type: "string" },
			//'lastname',
			{ name: "email", type: "string" },
			//'email',
			{ name: "department", type: "string" },
			//'department',
			{ name: "role", type: "string" },
			//'role',
			{ name: "phone", type: "string" }
			//'phone',
			//'id'
		]
		//,idProperty: 'memid'
    },

	getFullName: function() {
		return this.get('firstname') + ' ' + this.get('lastname');
	}
});