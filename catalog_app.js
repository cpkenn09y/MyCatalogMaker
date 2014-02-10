var CatalogApp = function() {

}

CatalogApp.prototype.initialize = function() {
  this.attachListeners()
}

CatalogApp.prototype.attachListeners = function() {
  this.enableItemCreation()
}

CatalogApp.prototype.enableItemCreation = function() {
  self = this
  $('form.make-item').on('submit', this.createItem)
}

CatalogApp.prototype.createItem = function(event) {
  event.preventDefault()
  var name = this["name"].value
  var price = this["price"].value
  var item = new Item({name: name, price: price}).save()
}

$(document).ready(function() {
  var myCatalogApp = new CatalogApp()
  myCatalogApp.initialize()
})
