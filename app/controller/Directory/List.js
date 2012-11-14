Ext.define('SFASU.controller.Directory.List', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			//homescreen: 'homescreen',
			directory: 'directory_main',
			library: 'library_main',
			AARC: 'aarc_main',
			slide: 'slidenavigationview',
			libraryPerson: 'library_main directory_person',
			directoryPerson: 'directory_main directory_person',
			AARCPerson: 'aarc_main directory_person',
			
			person: 'directory_person',
			
			directoryPersonInfo: 'directory_main directory_person directory_person_info',
			directoryPersonContact: 'directory_main directory_person directory_person_contact',
			
			AARCPersonInfo: 'aarc_main directory_person directory_person_info',
			AARCPersonContact: 'aarc_main directory_person directory_person_contact',
			
			libraryPersonInfo: 'library_main directory_person directory_person_info',
			libraryPersonContact: 'library_main directory_person directory_person_contact',
			
			favoriteButton: 'directory_main #favoriteButton',
			axe: 'directory_main [name=slidebutton]',
			libraryAxe: 'library_main [name=slidebutton]',
			AARCAxe: 'aarc_main [name=slidebutton]'
		},
		control: {
			'directory_main directory_list': {
				itemtap: 'showPersonDirectory',
				itemsingletap: 'showPersonDirectory',
				itemdoubletap: 'showPersonDirectory',
			},
			'aarc_main directory_list': {
				itemtap: 'showPersonAARC',
				itemsingletap: 'showPersonAARC',
				itemdoubletap: 'showPersonAARC',
			},
			'library_main directory_list': {
				itemtap: 'showPersonLibrary',
				itemsingletap: 'showPersonLibrary',
				itemdoubletap: 'showPersonLibrary',
			},
			'directory_favorites': {
				itemtap: 'showPersonDirectory',
				itemsingletap: 'showPersonDirectory',
				itemdoubletap: 'showPersonDirectory',
			}
		}
	},
	
	showAxe: function() {
		if(this.getAxe()) {
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	hideAxe: function(navigationview) {
		switch(navigationview) {
			case 'library':
				if(this.getLibraryAxe()) {
					this.getLibraryAxe().hide({type: 'fadeOut'});
				}
			  break;
			case 'aarc':
				if(this.getAARCAxe()) {
					this.getAARCAxe().hide({type: 'fadeOut'});
				}
			  break;
			default:
				if(this.getAxe()) {
					this.getAxe().hide({type: 'fadeOut'});
				}
			  break;
		}
	},
	
	showPersonDirectory: function(list, index, element, record) {
		console.log('showPersonDirectory');
		console.log(list.up());
		if(!this.getDirectoryPerson()) {
			this.showPerson(list, index, element, record, 'directory');
		}
	},
	
	showPersonAARC: function(list, index, element, record) {
		if(!this.getAARCPerson()) {
			this.showPerson(list, index, element, record, 'aarc');
		}
	},
	
	showPersonLibrary: function(list, index, element, record) {
		if(!this.getLibraryPerson()) {
			this.showPerson(list, index, element, record, 'library');
		}
	},

	showPerson: function(list, index, element, record, navigationview) {
		//console.log(Ext.Viewport.getActiveItem());
		//console.log(this.getSlide().getActiveItem());
		//console.log(this.getSlide().getActiveItem().getItems());

		var contactStore, departmentsStore, mapsStore, 
			departmentRecord, mapRecord, 
			position, map, marker;
		
		this.person = Ext.widget('directory_person');

		this.person.config.title = record.getFullName();
		
		this.person.config.id = record.get('id');
		this.person.config.personId = record.get('personId');
		this.person.config.firstname = record.get('firstname');
		this.person.config.lastname = record.get('lastname');
		this.person.config.email = record.get('email');
		this.person.config.department = record.get('department');
		this.person.config.role = record.get('role');
		this.person.config.phone = record.get('phone');
		
		contactStore = new Ext.data.Store({
		    autoLoad: true,
			fields: ['type', 'data'],
			data: [
				{
					iconsCls: 'phone1',
					type: 'Phone',
					data: record.get('phone')
				},
				{
					iconsCls: 'mail',
					type: 'E-mail',
					data: record.get('email')
				},
			]
		});
		
		if(navigationview == 'aarc') {
			this.hideAxe('aarc');
			this.getAARC().push(this.person);
			this.getAARCPersonInfo().setRecord(record);
			this.getAARCPersonContact().setStore(contactStore);
		} else if(navigationview == 'library') {
			this.hideAxe('library');
			this.getLibrary().push(this.person);
			this.getLibraryPersonInfo().setRecord(record);
			this.getLibraryPersonContact().setStore(contactStore);
		} else {
			this.hideAxe();
			this.getDirectory().push(this.person);
			this.getDirectoryPersonInfo().setRecord(record);
			this.getDirectoryPersonContact().setStore(contactStore);
		}
		
		departmentsStore = Ext.getStore('Directory.Departments');
		mapsStore = Ext.getStore('Maps');
		
		departmentRecord = departmentsStore.findRecord('department', record.get('department'));
		
		mapRecord = mapsStore.findRecord('id', departmentRecord.get('building'));
		
		position = new google.maps.LatLng(mapRecord.get('lat'), mapRecord.get('lon'));
			
		map = this.person.add({
			xtype: 'map',
			flex: 1,
			title: record.getFullName(),
			getLocation: true,
			mapOptions: {
				mapMaker: true,
				zoom: 17,
				center: position,
		        mapTypeId: google.maps.MapTypeId.HYBRID
			}
		});
		
		marker = new google.maps.Marker({
	        position: position,
	        map: map.getMap(),
	        visible: true
	    });
	
		//this.getFavoriteButton().show();
	}
});
