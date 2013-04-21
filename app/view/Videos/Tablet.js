Ext.define('SFASU.view.Videos.Tablet', {

    extend: 'Ext.DataView',

    requires: [
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'videos_tablet',

    config: {
		title: 'Recent Videos',

       	store: 'Videos',
        limit: 10,
		grouped: true,

        plugins: [
            //{ type: 'listpaging' },
            //{ type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">There are currently no published videos.</p>',

		itemTpl: [
			'<tpl for=".">',
				'<div style="width:50%;',
					'height: ' + (Ext.os.is.Phone ? '145' : '300') + 'px;',
					'background-repeat:no-repeat;',
					'background-image: url({thumbnail});',
					'background-size: 100% 100%;',
					'background-position:center center;',
					'float:left;">',
				'<div class="homeCaption ' + (Ext.os.is.Phone ? '' : 'homeCaptionTablet') + '">',
					'<span style="text-transform:capitalize;">{Video}</span>',
					'<h2>{publishedDate:date("F j, Y")}</h2>',
					'<p>{title}<br/>{duration}</p>',
				'</div>',
				'</div>',
			'</tpl>'
		]
    }
});
