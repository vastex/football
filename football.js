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
        element.innerHTML = "<table style='width:224; height:300;' id='standing'><tr><th>Heim</th><th>Gast</th><th>Ergebnis</th></tr><tbody><tr></tr></tbody></table>";
        return element;
    },
    scheduleUpdate: function (delay) {
        var nextLoad = 100000;
        

        var self = this;
        setInterval(function () {
            self.getStanding();
        }, nextLoad);
        $('#standing tbody').empty();
        
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
            var respss = response.matches;
            $.each(respss, function (key, value) {
                console.log(key + ": " + " AWAY: " + value.awayTeam.name + "Score: " + value.score.fullTime.awayTeam + "HOME: " + value.homeTeam.name + "Score: " + value.score.fullTime.homeTeam);
                $('#standing tr:last').after("<tr><td>" + value.homeTeam.name + "</td><td> " + value.awayTeam.name + "</td><td>" + value.score.fullTime.homeTeam + ":" + value.score.fullTime.awayTeam + " </td></tr>");
            });
        });
        
    },

    notificationReceived: function () { },
    socketNotificationReceived: function () { },

    
})
