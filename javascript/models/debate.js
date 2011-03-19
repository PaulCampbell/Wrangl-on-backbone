var Debate = Backbone.Model.extend({
    url: function () {
		return 'http://wrangl.com/' + this.get('slug') + '/json';
		},
    
  
    
    date_posted: function() {
    	return new Date(); //eval(s.created_at.replace(/\/Date\((\d+)\)\//gi, "new Date($1)"));
    },
    
    yes_option_text: function(){
     return this.get('yes_text') || 'Yes';
    },
    
    no_option_text: function(){
     return this.get('no_text') || 'No';
    },
    
    yes_arguments: function(){
    	// _.each(this.aarguments)
    }
    
});