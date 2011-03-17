App.Views.DebatesView = Backbone.View.extend({
    initialize: function () {
        this.debate = this.model;
        _.bindAll(this, 'render');
        this.render();
        
    },

    render: function () {
        if (this.debate) { 
            var out = ich.debateview(this.debate.toJSON());
        } else {
            out = "<h3>No debate found.</h3>";
        }
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});

