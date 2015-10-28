Ext.define('YelpTouch.controller.Search', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            termField: 'search #term',
            cityField: 'search #city',
            map: 'search searchmap',
            searchToolbar: 'search searchToolbar',
            Geocode: 'Geocode',
            stores:['Businesses'],
        },
        control: {
            'termField': {
                keyup: 'onSearchTerm'
            },
            'cityField': {
                keyup: 'onSearchCity'
            }
        },
        location: null,
    },

    currentLocation: null,
    
    //called when the Application is launched, remove if not needed
    launch: function() {
        this.useCurrentLocation();
    },

    onSearchTerm: function(field){
        console.log(field.getValue());
    },

    onSearchCity: function(field){
        console.log(field.getValue());
    },

    updateLocation: function(location){
        if(location){
            this.getMap().setMapCenter(location);
        }
    },


    useCurrentLocation: function() {
        var me = this;
        if (me.currentLocation){
            this.setLocation(me.currentLocation);
            return;
        }
        // me.searchToolbar.disable();
        YelpTouch.util.Geocode.calculateCurrentLatLng(function(latLng) {
            var ll = {
              latitude: latLng.lat(),
              longitude: latLng.lng()
            };
            me.currentLocation = ll; // Remember the current location
            me.updateLocation(ll);
            me.setLocation(ll);
            console.log(me.currentLocation);

      //me.getSearchToolbar().enable();
        });
    },

    doSearchTerm: function(term) {
        var ll = this.getLocation();
        
        Ext.getStore('Businesses').load({
            params: {
                ll: ll.latitude + ',' + ll.longitude,
                term: term
            }
        });
    }
});
