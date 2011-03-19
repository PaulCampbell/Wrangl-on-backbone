App.Controllers.Debates = Backbone.Controller.extend({
    routes: {
        "debates/:slug":  "debate_view",
        "": 			"index"
    },

    debate_view: function (slug) {
        var debate = new Debate({slug: slug});
        debate.fetch({
            success: function (model, resp) {
            	new App.Views.DebatesView({ model: model});
            },
            error: function () {
                new Error({ message: 'Could not find that Debate.' });
                window.location.hash = '#';
            }
        });
    },

    index: function () {  	
    	var debates = new  App.Collections.Debates();
    	debates.fetch({
    		success: function (model, resp) {
            	new App.Views.DebatesIndex({model: model}); 
            },
            error: function () {
                new Error({ message: 'No debates found' });
                window.location.hash = '#';
            }
       });
 
    }

});
