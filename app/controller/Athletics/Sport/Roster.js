Ext.define('SFASU.controller.Athletics.Sport.Roster', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homescreen: 'homescreen',
			athletics: 'athletics_main',
			bio: 'athletics_sport_bio_main',
			bioPlaque: 'athletics_sport_bio_plaque',
			bioInfo: 'athletics_sport_bio_info',
		},
		control: {
			'athletics_sport_roster': {
				itemtap: 'showBio'
			}
		}
	},

	showBio: function(list, index, element, record) {
		
		if (!this.getBio()) {
			this.bio = Ext.widget('athletics_sport_bio_main');

			this.bio.config.title = record.get('first_name') 
				+ ' ' 
				+ record.get('last_name');
			
			this.bio.config.firstname = record.get('first_name');
			this.bio.config.lastname = record.get('last_name');
			this.bio.config.number = record.get('number');
			
		
			var params = { 
				feature: 'athletics_bio',
				bio_id: record.get('bio_id'),
				details: record.get('details')
			};
		
			var bioStore = Ext.getStore('Athletics.Sport.Bio');
		
			bioStore.getProxy().setExtraParams(params);
			bioStore.load(
				function(records, operation, success) {
					console.log('loaded records');
					var bioRecord = records[0];
					var bioInfo = new Array();
				
					var data = [
						{
							type: 'Hometown',
							data: bioRecord.get('hometown')
						},
						{
							type: 'Eligibility',
							data: bioRecord.get('eligibility')
						},
						{
							type: 'Active',
							data: bioRecord.get('active')
						},
						{
							type: 'Experience',
							data: bioRecord.get('experience')
						},
						{
							type: 'Graduating',
							data: bioRecord.get('grad_flag')
						},
						{
							type: 'Player Number',
							data: bioRecord.get('player_number')
						},
						{
							type: 'Height',
							data: bioRecord.get('height')
						},
						{
							type: 'Weight',
							data: bioRecord.get('weight')
						},
						{
							type: 'Gender',
							data: bioRecord.get('gender')
						},
						{
							type: 'Birth Date',
							data: bioRecord.get('birthdate')
						},
						{
							type: 'Position/Event',
							data: bioRecord.get('position_event')
						},
						{
							type: 'Speciality',
							data: bioRecord.get('special')
						},
						{
							type: 'Last College',
							data: bioRecord.get('lastcollege')
						},
						{
							type: 'Last School',
							data: bioRecord.get('lastschool')
						},
						{
							type: 'Synopsis',
							data: bioRecord.get('synopsis')
						},
						/*
						{
							type: 'Bio Page',
							data: bioRecord.get('bio_page')
						},
						{
							type: 'Galleries',
						data: bioRecord.get('galleries')
						},
						*/
				];
				
				Ext.each(data, function(item) {
					if(item.data != null) {
						bioInfo.push(item);
					}
				});
				
				var statsStore = new Ext.data.Store({
				    autoLoad: true,
					fields: ['type', 'data'],
					data: bioInfo
				});
				
				
				this.bio.config.bio_page = bioRecord.get('bio_page');
				
				this.getAthletics().push(this.bio);
				//this.getBio().setRecord(bioRecord);
				this.getBioPlaque().setRecord(bioRecord);
				this.getBioInfo().setStore(statsStore);

				var map = this.bio.add({
					xtype: 'map',
					flex: 1,
					mapOptions: {
						disableDefaultUI: true,
						zoom: 4,
						address: bioRecord.get('hometown'),
				        mapTypeId: google.maps.MapTypeId.ROADMAP
					}
				});
				
				var geocoder = new google.maps.Geocoder();
				var address = bioRecord.get('hometown');
				
			    geocoder.geocode( { 'address': address}, function(results, status) {
			      if (status == google.maps.GeocoderStatus.OK) {
			        map.getMap().setCenter(results[0].geometry.location);
			        var marker = new google.maps.Marker({
			            map: map.getMap(),
			            position: results[0].geometry.location
			        });
			      }
			    });
		    },
			this
		);
		}
	}
});
