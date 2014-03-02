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
  var width = submittedForm["width"].value
  var length = submittedForm["length"].value
  var height = submittedForm["height"].value
  var weight = submittedForm["weight"].value
  var newItemData = that.appendUnitsIfHasValue(width, length, height, weight)
  newItemData["name"] = submittedForm["name"].value
  newItemData["description"] = submittedForm["description"].value
  newItemData["price"] = Number(submittedForm["price"].value)
  that.catalog.add(newItemData)
  that.displayCollection(that.catalog)
  submittedForm.reset()
}

CatalogApp.prototype.appendUnitsIfHasValue = function(inputWidth,inputLength,inputHeight,inputWeight) {
  inputWidth != "" ? inputWidth+=' '+DIMENSIONSUNIT : inputWidth = "N/A"
  inputLength != "" ? inputLength+=' '+DIMENSIONSUNIT : inputLength = "N/A"
  inputHeight != "" ? inputHeight+=' '+DIMENSIONSUNIT : inputHeight = "N/A"
  inputWeight != "" ? inputWeight+=' '+WEIGHTUNIT : inputWeight = "N/A"
  return {width: inputWidth, length: inputLength, height: inputHeight, weight: inputWeight}
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
