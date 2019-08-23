Module.register("football", {
    defaults: {},
    start: function () { },
    getScripts: function () {
        return [this.file("bower_components/jquery-3.4.1.min/index.js")];
    },
    getDom: function () {
        $.ajax({
            headers: { 'X-Auth-Token': 'f808fe88377e4d759e8fcb1d6eaa27e9' },
            url: "http://api.football-data.org/v2/competitions/2003/matches?matchday=1",
            dataType: 'json',
        type: 'GET',
        }).done(function(response) {
            // do something with the response, e.g. isolate the id of a linked resource   
            console.log(response);
        });

        request.send()
        var element = document.createElement("div");
        element.className = "myContent";
        element.innerHTML = "<table style='width:100%' id='standing'><tr><th>Heim</th><th>Gast</th><th>Ergebnis</th></tr><tr><td>BVB</td><td>Bayern</td><td>2:2</td></tr></table>";
        return element;
    },
    notificationReceived: function () { },
    socketNotificationReceived: function () { },
    
})
