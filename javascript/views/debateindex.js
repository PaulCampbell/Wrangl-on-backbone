App.Views.DebatesIndex = Backbone.View.extend({
    initialize: function () {
   		this.debates = this.model
        _.bindAll(this, 'render');
        this.render();    
    },

    render: function () { 
    var out = "" ;
    if(this.debates){
    	var debatesarray = {debates: [this.debates.models ] };
    	out += "<h1>Latest debates</h1>";
    	_.each(this.debates.models,function(d){ 
    		
    		out += "<section><h1><a href='#debates/" + d.get("slug") + "'>" + d.get("title") 
    		 + "</a></h2><p>" + d.get("description") + "</p></section>"; 

    	})
        
	}
	else
	{
		out = "<h3>No debates found</h3>"
	}
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});


