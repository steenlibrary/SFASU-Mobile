/**
 * Represents a 2D point with x and y properties, useful for comparison and instantiation
 * from an event:
 *
 *     var point = Ext.util.Point.fromEvent(e);
 */
Ext.define('SFASU.util.OpenLink', {
    constructor: function(href) {
		if(childBrowser) {
				childBrowser.showWebPage(href);
		} else {
			Ext.Msg.confirm('External Link', 'Open in browser?', function(result){
				if (result == 'yes') {
					window.location = href;
				}
			});
		 }
    }
});
