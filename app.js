/**
 * SFASU Mobile version 2.0
 *
 * Sencha Touch 2
 *
 * Copyright (C) Stephen F. Austin State University, 2012.
 *
 * @author   Michael Gillen <mlgillen@sfasu.edu>
 */

var childBrowser;

Ext.Loader.setConfig({
   enabled: true
});

//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src',
	'Ext.ux': './ux',
    'SFASU': 'app'
});
//</debug>

Ext.util.openLink = function(href) {
	if(childBrowser) {
		childBrowser.showWebPage(href);
	} else {
		Ext.Msg.confirm('External Link', 'Open in browser?', function(result){
            if (result == 'yes') {
                window.location = href;
            }
        });
  }
};

Ext.util.callNumber = function(phone) {
	Ext.Msg.confirm('Please Confirm', 'Are you sure you want to dial ' + phone + '?', function(result){
        if (result == 'yes') {
            window.location.href = 'tel:' + phone;
        }
    });
};

Ext.util.email = function(email) {
	Ext.Msg.confirm('Please Confirm', 'Are you sure you want to email ' + email + '?', function(result){
        if (result == 'yes') {
            window.location.href = 'mailto:' + email;
        }
    });
};

Ext.application({
    name: 'SFASU',

 	serverPath: 'http://library.sfasu.edu/mobile/data/index.php',

    requires: [
        'Ext.MessageBox'
    ],
	
	controllers: [
		'Alerts',
		
		'AARC.Main',
		'AARC.Groups',
		'AARC.WalkIn',

		'About',
		
		'Athletics.Main',
		'Athletics.News',
		'Athletics.Events',
		'Athletics.Sport.News',
		'Athletics.Sport.Schedule',
		'Athletics.Sport.Roster',
		'Athletics.Sport.Bio.Main',
		
		'Courses',
		
		'Directory.Main',
		'Directory.Search',
		'Directory.Departments',
		'Directory.Emergency',
		'Directory.General',
		'Directory.List',
		//'Directory.Favorites',
		'Directory.Person.Main',
		'Directory.Person.Contact',
		
		'Home.Feed',
		
		'Library.Main',
		'Library.Catalog',
		'Library.Account',
		
		'Maps',
		
		'News',
		
		'NewStudent',
		
		'Events',
		
		'PineLog',
		
		'Radio.Listen',
		
		'Twitter',
		
		'Videos'
	],
	
	models: [
		'Athletics.Sport.Bio',
		'Athletics.Sport.News',
		
		'Directory.Departments',
		'Directory.Person',
		
		'Events',
		
		'Library.Hours',
		
		'News',
		
		'PineLog'
	],
	
	stores: [
		'AARC.Groups',
		'AARC.WalkIn',
		
		'Athletics.News',
		//'Athletics.Events',
		'Athletics.Sport.Bio',
		
		'Alerts',
		
		'Directory.Departments',
		'Directory.Favorites',
		
		'Events',
		
		'Home.Feed',
		
		'Library.Hours', 
		
		'Maps',
		
		'News', 
		
		'PineLog',
		
		//'Facebook',
		
		'Twitter',
		
		'Videos',
		
		'WhatsNew'
	],
	
    views: [
		'Home.SlideMenu',
		'Home.Feed',
		
		'AARC.Main',
		'AARC.Groups',
		'AARC.WalkIn',
		
		'About',
		
		'Athletics.Main',
		'Athletics.News',
		'Athletics.Events',
		
		'Athletics.Sport.Main',
		'Athletics.Sport.News',
		'Athletics.Sport.Schedule',
		'Athletics.Sport.Roster',
		'Athletics.Sport.Bio.Main',
		'Athletics.Sport.Bio.Plaque',
		'Athletics.Sport.Bio.Info',
		
		'Alerts',
		
		'Courses',
		
		'Directory.Main',
		'Directory.Search',
		'Directory.Departments',
		'Directory.General',
		'Directory.Emergency',
		'Directory.Favorites',
		'Directory.List',
		'Directory.Person.Main',
		'Directory.Person.Info',
		'Directory.Person.Contact',
		
		'Library.Main',
		'Library.Catalog',
		'Library.Account',
		'Library.Hours',
		//'Library.Map',
		'Library.Staff',
		
		'Maps',
		
		'News',
		
		'NewStudent',
		
		'Events', 
		
		'PineLog',
		
		'Radio.Main',
		'Radio.Listen',
		'Radio.Schedule',
		'Radio.About',
		
		'Social',
		
		'Traditions',
		'TraditionsPane',
		
		'Facebook',
		'Twitter',

		'Videos.Main',
		'Videos.Phone',
		'Videos.Tablet',
		'Videos.Pane',
		
		'WhatsNew'
	],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        //'640x920': 'resources/startup/640x920.png',
		'640x920': 'resources/loading/Default@2x.png',
        //'768x1004': 'resources/startup/768x1004.png',
		'768x1004': 'resources/loading/Default@2x.png',
        //'748x1024': 'resources/startup/748x1024.png',
		'748x1024': 'resources/loading/Default@2x.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
		Ext.Viewport.add(Ext.create('SFASU.view.Home.SlideMenu'));
		//onDeviceReady();
		// install childBrowser
		if(window.plugins) {
			childBrowser = window.plugins.childBrowser;
			//childBrowser.showWebPage("http://google.com");
		}
    },

	onReady: function() {
		
	},

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});