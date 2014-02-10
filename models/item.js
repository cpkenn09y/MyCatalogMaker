var Item = Backbone.Model.extend({
  initialize: function() {

  },

  defaults: {
    name: "none",
    description: "none",
    width: "unknown",
    length: "unknown",
    height: "unknown",
    weight: "unknown",
    price: 0
  },

  firebase: new Backbone.Firebase("mycatalogmaker.firebaseIO.com/items")
})