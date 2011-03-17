App.Views.DebatesIndex = Backbone.View.extend({
    initialize: function () {
       _.bindAll(this, 'render');
        this.render();    
    },

    render: function () { 
        var out = "<a href='#debates/1'>Debate 1</a>";

        $(this.el).html(out);
        $('#app').html(this.el);
    }
});


