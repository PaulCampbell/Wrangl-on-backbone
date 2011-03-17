var App = {
			Views: {},
			Controllers: {},
            Collections: {},
			init: function() {
			    new App.Controllers.Debates();
				Backbone.history.start();
			}
        };

