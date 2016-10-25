(function(){
    $.getJSON("certificates/asistentesLGBT.json", function(data){
        if(!localStorage.asistentes){
                localStorage.asistentes = JSON.stringify(data);
                ko.applyBindings(viewmodel);
        }
    });

    ko.utils.stringStartsWith = function (string, startsWith) {
        console.log("string");      
        string = string || "";
        if (startsWith.length > string.length)
            return false;
        return string.substring(0, startsWith.length) === startsWith;
    }
})();

var viewmodel = function(){
    var self = this;
    self.asistentesLgbt = ko.observableArray();

    var asistentes = JSON.parse(localStorage.asistentes);

    console.log(asistentes);
    
    asistentes.forEach(function(item){
        self.asistentesLgbt.push({
            'name' : item.asistente,
            'url' : './certificates/' + item.asistente + '.pdf'
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

