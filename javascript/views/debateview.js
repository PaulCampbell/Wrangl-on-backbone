App.Views.DebatesView = Backbone.View.extend({
    initialize: function () {
        this.debate = this.model;
        _.bindAll(this, 'render');
        this.render();        
    },

    render: function () {
        if (this.debate) { 
        	this.debate.attributes.yes_option_text = this.debate.yes_option_text();
        	this.debate.attributes.no_option_text = this.debate.no_option_text();
            var out = ich.debateview(this.debate.toJSON());
        } else {
            out = "<h3>No debate found.</h3>";
        }
        
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});

