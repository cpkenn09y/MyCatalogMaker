var DIMENSIONSUNIT = "ft"
var WEIGHTUNIT = "lbs"

var CatalogApp = function() {
  this.catalog = new Catalog()
}

CatalogApp.prototype.initialize = function(firebaseDB) {
  this.attachListeners()
}

CatalogApp.prototype.attachListeners = function() {
  this.enableItemCreation()
}

CatalogApp.prototype.enableItemCreation = function() {
  that = this
  $('form.make-item').on('submit', this.createItem)
}

CatalogApp.prototype.createItem = function(event) {
  event.preventDefault()
  submittedForm = this
  var name = submittedForm["name"].value
  var description = submittedForm["description"].value
  var width = submittedForm["width"].value; if (width != "") {width += ' '+DIMENSIONSUNIT} else {width = "N/A"}
  var length = submittedForm["length"].value; if (length != "") {length += ' '+DIMENSIONSUNIT} else {length = "N/A"}
  var height = submittedForm["height"].value; if (height != "") {height += ' '+DIMENSIONSUNIT} else {height = "N/A"}
  var weight = submittedForm["weight"].value; if (weight != "") {weight += ' '+WEIGHTUNIT} else {weight = "N/A"}
  var price = Number(submittedForm["price"].value)
  that.catalog.add({name: name, description: description, width: width, length: length, height: height, weight: weight, price: price})
  that.displayCollection(that.catalog)
  submittedForm.reset()
}

CatalogApp.prototype.appendUnitsIfHasValue = function(formField) {
  return true
}

CatalogApp.prototype.displayCollection = function(catalog) {
  var myCatalogView = new CatalogView({collection: catalog, el: $("#catalog-container")[0]})
  myCatalogView.render()
}

$(document).ready(function() {
  var application = new CatalogApp()

  application.catalog.bind('sync', function(){
    application.displayCollection(application.catalog)
  })

  application.initialize()
})
