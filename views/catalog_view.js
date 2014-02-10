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
    this.$el.append('<ul class="item-list"></ul>')
    this.iterateCollection(this.collection)
  }
})