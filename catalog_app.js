var DIMENSIONSUNIT = "ft"
var WEIGHTUNIT = "lbs"

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
  var description = submittedForm["description"].value
  var width = submittedForm["width"].value + DIMENSIONSUNIT
  var length = submittedForm["length"].value + DIMENSIONSUNIT
  var height = submittedForm["height"].value + DIMENSIONSUNIT
  var weight = submittedForm["weight"].value + WEIGHTUNIT
  var price = Number(submittedForm["price"].value)
  var item = new Item({name: name, description: description, width: width, length: length, height: height, weight: weight, price: price}).save()
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
