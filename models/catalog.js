var Catalog = Backbone.Firebase.Collection.extend({
  model: Item,
  firebase: "https://mycatalogmaker.firebaseIO.com/items",
});