Module.register("football", {
    defaults: {},
    start: function () { },
    getDom: function () {
        var element = document.createElement("div");
        element.className = "myContent";
        element.innerHTML = "Hello, World! ";
        var subElement = document.createElement("table");
        subElement.innerHTML = "<table style='width:100%' id='standing'><tr><th>Heim</th><th>Gast</th><th>Ergebnis</th></tr><tr><td>BVB</td><td>Bayern</td><td>2:2</td></tr></table>";
        subElement.id = "COUNT";
        element.appendChild(subElement);
        return element;
    },
    notificationReceived: function () { },
    socketNotificationReceived: function () { },
})
