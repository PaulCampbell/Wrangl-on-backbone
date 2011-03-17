var Debate = Backbone.Model.extend({

    url: function () {
        return 'http://wrangl.com/datamapper-activerecord/json' ;
    },
    
    top_level_arguments: function() { 
    	return _.select(this.arguments, function(a){ 
            		return (a); 
            	});
    },
    
    date_posted: function() {
    	return new Date(); //eval(s.created_at.replace(/\/Date\((\d+)\)\//gi, "new Date($1)"));
    }
    
});