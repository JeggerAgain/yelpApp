Ext.define('YelpTouch.view.Main', {
     extend: 'Ext.tab.Panel',
     xtype: 'main',
     requires: [
         'Ext.TitleBar',
         'YelpTouch.view.search.Search',
         'YelpTouch.view.Promo',
         'YelpTouch.view.Survey'
     ],
     config: {
         tabBarPosition: 'bottom',
         items: [{
             xtype: 'titlebar',
             title: 'YelpTouch',
             docked: 'top'
         }, {
             xtype: 'search',
             title: 'Search',
             iconCls: 'search'
         }, {
             xtype: 'promo',
             title: 'Promo',
             iconCls: 'star'
         }, {
             xtype: 'survey',
             title: 'Survey',
             iconCls: 'compose'
         }]
     }
 });