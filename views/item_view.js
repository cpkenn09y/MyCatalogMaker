var ItemView = Backbone.View.extend({

  tagName: "li",

  template : _.template("<span><%= get('name') %></span><span><%= get('price') %></span>"),

  renderHTML : function(){
    this.$el.html(this.template(this.model))
    return this.$el
  }
})