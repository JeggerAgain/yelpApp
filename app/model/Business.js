Ext.define('YelpTouch.model.Business', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'name', type: 'auto' },
            { name: 'distance', type: 'auto' },
            { name: 'rating', type: 'auto' },
            { name: 'review_count', type: 'auto' },
            { name: 'mobile_url', type: 'auto' },
            { name: 'image_url', type: 'auto' },
            { name: 'phone', type: 'auto' },
            { name: 'display_address', type: 'auto', mapping: 'location.display_address'},
            { name: 'latitude', type: 'auto', mapping: 'location.coordinate.latitude'},
            { name: 'longitude', type: 'auto', mapping: 'location.coordinate.longitude'}

        ]
    },
     proxy: {
             type: 'ajax',
             url : 'http://traininglabs.sencha.com/api/yelp/v2/search',
             reader: {
                 type: 'json',
                 rootProperty: 'businesses'
             }
            }
});
