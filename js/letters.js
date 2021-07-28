function animation() {
    var main = document.getElementById("main");
    var logo = document.getElementById("logo");
    var header = document.getElementById("header");
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");

    var ml1 = {};
    ml1.opacityIn = [0,1];
    ml1.scaleIn = [0.2, 1];
    ml1.scaleOut = 3;
    ml1.scaleEnd = 4;
    ml1.durationIn = 800;
    ml1.durationOut = 600;
    ml1.durationEnd = 1000;
    ml1.delay = 500;

    anime.timeline({loop: false}).add({
            targets: '.ml1 .letters-1',
            opacity: ml1.opacityIn,
            scale: ml1.scaleIn,
            duration: ml1.durationIn
    }).add({
        targets: '.ml1 .letters-1',
        opacity: 0,
        scale: ml1.scaleOut,
        duration: ml1.durationOut,
        easing: "easeInExpo",
        delay: ml1.delay
    }).add({
        targets: '.ml1 .letters-2',
        opacity: ml1.opacityIn,
        scale: ml1.scaleIn,
        duration: ml1.durationIn
    }).add({
        targets: '.ml1 .letters-2',
        opacity: 0,
        scale: ml1.scaleOut,
        duration: ml1.durationOut,
        easing: "easeInExpo",
        delay: ml1.delay
    }).add({
        targets: '.ml1 .letters-3',
        opacity: ml1.opacityIn,
        scale: ml1.scaleIn,
        duration: ml1.durationIn
    }).add({
        targets: '.ml1 .letters-3',
        opacity: 0,
        scale: ml1.scaleOut,
        duration: ml1.durationOut,
        easing: "easeInExpo",
        delay: ml1.delay
    }).add({
        targets: '.ml1 .letters-4',
        opacity: ml1.opacityIn,
        scale: ml1.scaleIn,
        duration: ml1.durationIn
    }).add({
        targets: '.ml1 .letters-4',
        opacity: 1,
        scale: ml1.scaleEnd,
        duration: ml1.durationEnd,
        easing: "easeInExpo",
        delay: ml1.delay
    }).add({
        targets: '.ml2 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
    }).add({
        targets: '.ml2 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
    }).add({
        targets: '.ml2 .commat',
        opacity: [0,1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.ml2 .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.ml2 .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.line',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    }).add({
        targets: main,
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo"
    }).add({
        targets: header,
        opacity: 1,
        duration: 1000,
        easing: "easeInExpo"
    }).add({
        targets: logo,
        opacity: 1,
        duration: 1500,
        easing: "easeInExpo"
    }).add({
        targets: link1,
        opacity: 1,
        duration: 1000,
        easing: "easeInExpo"
    }).add({
        targets: link2,
        opacity: 1,
        duration: 1000,
        easing: "easeInExpo"
    }).add({
        targets: link3,
        opacity: 1,
        duration: 1000,
        easing: "easeInExpo"
    }).add({
        targets: link4,
        opacity: 1,
        duration: 1000,
        easing: "easeInExpo"
    });
}