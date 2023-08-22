function show() {
    document.getElementById('next-item1').style.display = "inline-flex";
    document.getElementById('next-item2').style.display = "inline-flex";
    document.getElementById('next-item3').style.display = "inline-flex";
    document.getElementById('append-button').style.display = "none";
    document.getElementById('hide-gradient').style.display = "none";
}

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true,
    'alwaysShowNavOnTouchDevices': true,
})
