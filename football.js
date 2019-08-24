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
        element.style.maxWidth = "150px";
        element.style.maxHeight = "200px";
        element.innerHTML = "<table style='font-size:1em !important; width:150px !important; height:200px !important; border-collapse: separate; border-spacing: 2px 0;' id='standing'>";
        return element;
    },
    scheduleUpdate: function (delay) {
        var nextLoad = 60000;
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
                var homescore = value.score.fullTime.homeTeam;
                var fremdscore = value.score.fullTime.awayTeam;
                if (!value.score.fullTime.homeTeam) {
                    homescore = 0;
                }
                if (!value.score.fullTime.awayTeam) {
                    fremdscore = 0;
                }
                //console.log(key + ": " + " AWAY: " + value.awayTeam.name + "Score: " + value.score.fullTime.awayTeam + "HOME: " + value.homeTeam.name + "Score: " + value.score.fullTime.homeTeam);
                $('#standing tbody').append("<tr><td>" + value.homeTeam.name + "</td><td> " + value.awayTeam.name + "</td><td>" + homescore + ":" + fremdscore + " </td></tr>");
            });
        });
        
    },

    notificationReceived: function () { },
    socketNotificationReceived: function () { },

    
})
