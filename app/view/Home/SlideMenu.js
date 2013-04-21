Ext.define("SFASU.view.Home.SlideMenu", {
    extend: 'Ext.ux.slidenavigation.View',
    id: 'slidemenu',
    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom',
		'Ext.Img'
    ],
    
    config: {
        fullscreen: true,
         
        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'container',
		//slideSelector: false,
        
        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,
         
        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 250,
            width: 210,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                //cls: 'sfasuToolbar',

				title: {
                    //title: 'Navigation',
                    centered: true,
                    width: 210,
                    left: 0
                },
				
                
                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
				 
                items: [{
                    xtype: 'img',
                    //placeHolder: 'search',
					//centered: true,
					cls: 'sfasuToolbar',
					html: '&nbsp;',
                    width: 210
                }]
            }]
        },
        
        /**
         *  Example of how to re-order the groups.
         */
        groups: {
			'About': 1,
			'Athletics': 2,
            'Academics': 3,
            'Media': 4
        },
        
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },
        
        items: [{
            title: 'What\'s New',
			icon: 'resources/images/icons/whatsnew-75.png',
			group: 'SFASU Mobile',
            slideButton: {
                selector: 'titlebar'
            },
            items: [{
				xtype: 'feed'
			}]
        },{
			title: 'Become a Student',
			icon: 'resources/images/icons/newstudent-75.png',
			group: 'About',
			slideButton: {
				selector: 'titlebar'
			},
			items: [{
				xtype: 'newstudent'
			}]
		},{
            title: 'News',
			icon: 'resources/images/icons/news-75.png',
			group: 'About',
			slideButton: {
                selector: 'titlebar'
            },
            items: [{
				xtype: 'news'
			}]
        },{
			title: 'Events',
			icon: 'resources/images/icons/events-75.png',
			group: 'About',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'events'
			}]
		},{
			title: 'Traditions',
			icon: 'resources/images/icons/traditions-75.png',
			group: 'About',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'traditions'
			}]
		},{
			title: 'Campus Map',
			icon: 'resources/images/icons/map-75.png',
			group: 'About',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'maps'
			}]
		},{
			title: 'Staff Directory',
			icon: 'resources/images/icons/directory-75.png',
			group: 'About',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'directory_main'
			}]
		},{
			title: 'Campus Alerts',
			icon: 'resources/images/icons/alert-75.png',
			group: 'About',
			slideButton: {
				selector: 'titlebar'
			},
			items: [{
				xtype: 'alerts'
			}]
		},{
			title: 'Teams & News',
			icon: 'resources/images/icons/athletics-75.png',
			group: 'Athletics',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'athletics_main'
			}]
	    },{
			title: 'Library',
			icon: 'resources/images/icons/library-75.png',
			group: 'Academics',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'library_main'
			}]
		},{
			title: 'Courses',
			group: 'Academics',
			icon: 'resources/images/icons/courses-75.png',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'courses'
			}]
		},{
			title: 'Tutoring',
			group: 'Academics',
			icon: 'resources/images/icons/aarc-75.png',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'aarc_main'
			}]
		},{
			title: 'Videos',
			group: 'Media',
			icon: 'resources/images/icons/video-75.png',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'videos_main'
			}]
		},{
			title: 'Radio',
			icon: 'resources/images/icons/ksau-75.png',
			group: 'Media',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'radio_main'
			}]
		},{
			title: 'Social',
			icon: 'resources/images/icons/social-75.png',
			group: 'Media',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'social'
			}]
		},{
			title: 'The Pine Log',
			icon: 'resources/images/icons/pinelog-75.png',
			group: 'Media',
			slideButton: {
                selector: 'titlebar'
            },
			items: [{
				xtype: 'pinelog'
			}]
		},
		{
			title: 'About the App',
			icon: 'resources/images/icons/about-75.png',
			group: 'More',
			slideButton: {
				selector: 'titlebar'
			},
			items: [{
				xtype: 'about'
			}]
		}]
    }
});