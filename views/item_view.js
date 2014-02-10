var ItemView = Backbone.View.extend({

  tagName: "tr",

  template : _.template("<td class='name'><%= get('name') %></td><td><%= get('price') %></td><td><%= get('description') %></td><td><%= get('width') %></td><td><%= get('length') %></td><td><%= get('height') %></td><td><%= get('weight') %></td>"),

  renderHTML : function(){
    this.$el.html(this.template(this.model))
    return this.$el
  }
})