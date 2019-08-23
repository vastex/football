Module.register("football", {
    // Default module config.
    defaults: {
        text: "Hello World!"
    },

    // Override dom generator.
    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.setAttribute("id", "tablediv");
        wrapper.innerHTML = "<table style='width:100%' id='standing'><tr><th>Heim</th><th>Gast</th><th>Ergebnis</th></tr><tr><td>BVB</td><td>Bayern</td><td>2:2</td></tr></table>";
        return wrapper;
    }
});
