App.Controllers.Debates = Backbone.Controller.extend({
    routes: {
        "debates/:id":  "debate_view",
        "": 			"index"
    },

    debate_view: function (Id) {
        var debate = new Debate();
        debate.fetch({
            success: function (model, resp) {
        
            	new App.Views.DebatesView({ model: debate});
            },
            error: function () {
                new Error({ message: 'Could not find that Debate.' });
                window.location.hash = '#';
            }
        });
    },

    index: function () {  	
       	new App.Views.DebatesIndex();      
    }

});
