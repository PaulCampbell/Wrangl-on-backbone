App.Collections.Debates = Backbone.Collection.extend({
    model: Debate,
    url: 'http://wrangl.com/debates/recent.json'
});
