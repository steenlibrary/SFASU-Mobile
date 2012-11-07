Ext.define('SFASU.view.Twitter', {

    extend: 'Ext.List',

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.data.proxy.JsonP'
    ],

    xtype: 'twitter',

    config: {
        title: 'Twitter',
		iconCls: 'twitter2',
		xtype: 'list',
		store: 'Twitter',
        limit: 10,
		grouped: true,

        plugins: [
            { type: 'listpaging' },
            { type: 'pullrefresh' }
        ],

        emptyText: '<p class="no-searches">There was an error loading Twitter.</p>',

        itemTpl: '<p><img src="{profile_image_url}" style="float: left; padding-right: 5px;" /> @{from_user}: {text}</p><br/>'
        
    }
});
