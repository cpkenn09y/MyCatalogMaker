var CatalogView = Backbone.View.extend({

  iterateCollection : function(collection) {
    self = this
    if (collection) {
      collection.forEach(function(item){
        tempView = new ItemView({ model: item })
        self.$el.append(tempView.renderHTML())
      })
    }
  },

  render : function(){
    this.$el.empty()
    this.$el.append('<table class="item-list"></table>')
    this.$el.append('<tr><th>ITEM NAME</th><th>DESCRIPTION</th><th>WIDTH</th><th>LENGTH</th><th>HEIGHT</th><th>WEIGHT</th><th>PRICE</th></tr>')
    this.iterateCollection(this.collection)
  }
})