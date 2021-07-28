window.onload = function() {
    var backgroundImage = "backgroundImage" + Math.floor(Math.random() * 2) + ".png";
    document.getElementById("body").style.backgroundImage = "url(assets/" + backgroundImage + ")";

    document.getElementById("loadCube").style.display = "none";
    document.getElementById("loadText").style.display = "none";
    document.getElementById("shadow").style.display = "none";

    animation();
};