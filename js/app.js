var model = {
	//get csv or JSON file
	//pass each name to octopus
	init: function(){
		return asistentes;
	}
};
var octopus = {
	init: function(){
		this.asistenteArr = model.init();
		for(var a = 0; a < this.asistenteArr.length; a++){
			view.init(this.asistenteArr[a].Uppercase);
		}
	}

};
var view = {
	//render name as a list item
	init: function(a){
		view.render(a);
	},
	render: function(asist){
		var list = '<li><a href="./certificates/%data%.pdf"><i class="icon-download"></i> %data%</a></li>';
		var li = list.replace(/%data%/g, asist);
		document.getElementById("certificates").innerHTML += li;
	}
};

octopus.init();
