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
  submittedForm = this
  var name = submittedForm["name"].value
  var price = submittedForm["price"].value
  var item = new Item({name: name, price: price}).save()
  self.clearFormFields(submittedForm)
}

CatalogApp.prototype.clearFormFields = function(form) {
  form.reset()
}

CatalogApp.prototype.displayCollection = function(catalog) {
  var myCatalogView = new CatalogView({collection: catalog, el: $("#catalog-container")[0]})
  myCatalogView.render()
}

$(document).ready(function() {
  var myCatalogApp = new CatalogApp()
  var catalog = new Catalog()

  catalog.bind('sync', function(){myCatalogApp.displayCollection(catalog)})

  myCatalogApp.initialize()
})
