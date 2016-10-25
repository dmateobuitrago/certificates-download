ko.utils.stringStartsWith = function (string, startsWith) {        	
            string = string || "";
            if (startsWith.length > string.length)
                return false;
            return string.substring(0, startsWith.length) === startsWith;
}

var viewmodel = function(){
    var self = this;
    self.asistentesLgbt = ko.observableArray();
    
    asistentes.forEach(function(item){
        self.asistentesLgbt.push({
            'name' : item.Uppercase,
            'url' : '../certificates/' + item.Uppercase + '.pdf'
        });
    });
    
    self.filter = ko.observable("");
    self.filterAsistentes = ko.computed(function(){
        var filter = this.filter().toUpperCase();
        if(!filter){
            return self.asistentesLgbt();
        } else {
            return ko.utils.arrayFilter(self.asistentesLgbt(), function(item){
                return ko.utils.stringStartsWith(item.name, filter);
            });
        }
    })
}

ko.applyBindings(viewmodel);
