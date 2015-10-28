Ext.define('YelpTouch.store.Businesses', {
  extend: 'Ext.data.Store',
  requires: ['YelpTouch.model.Business'],
  config: {
      pageSize: 20, // Limit to 20 results per request via Yelp API
      model: 'YelpTouch.model.Business'
  }
});