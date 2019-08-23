Module.register("football", {
    defaults: {},
    start: function () {
        this.getStanding();
        this.scheduleUpdate();
    },
    getScripts: function () {
        return ["https://code.jquery.com/jquery-3.4.1.min.js"];
    },
    getDom: function () {
        var element = document.createElement("div");
        element.className = "myContent";
        element.innerHTML = "<table style='width:100%' id='standing'><tr><th>Heim</th><th>Gast</th><th>Ergebnis</th></tr><tr><td>BVB</td><td>Bayern</td><td>2:2</td></tr></table>";
        return element;
    },
    scheduleUpdate: function (delay) {
        var nextLoad = 60000;

        var self = this;
        setInterval(function () {
            self.getStanding();
        }, nextLoad);

        
    },
    getStanding: function () {
        $.ajax({
            headers: { 'X-Auth-Token': 'f808fe88377e4d759e8fcb1d6eaa27e9' },
            url: "http://api.football-data.org/v2/matches",
            dataType: 'json',
            type: 'GET',
        }).done(function (response) {
            // do something with the response, e.g. isolate the id of a linked resource   
            console.log(response);
            console.log("1");
            for (var matches in response) {
                
                console.log(matches);
                if (matches == "matches") {
                    console.log("bam oida");
                    for (var einzeln in matches) {
                        console.log(einzeln);
                    }
                }
            }
            $.each($.parseJSON(response), function (idx, obj) {
                console.log(obj.matches);
            });


        });
        
    },

    notificationReceived: function () { },
    socketNotificationReceived: function () { },

    
})
