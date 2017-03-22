var pointsArray = document.getElementsByClassName('point');
    
    var revealPoint = function(index) {
        point.style.opacity = 1;
        point.style.transform = "scaleX(1) translateY(0)";
        point.style.msTransform = "scaleX(1) translateY(0)";
        point.style.WebkitTransform = "scaleX(1) translateY(0)";  
    //     for(var i = 0; i < points.length; i++) {
//        revealPoint(i);
//     }

};

var animatePoints = function(points) {
    forEach(points, revealPoint);
};

var animatePoints = function(point) {

window.onload = function () {
    
    if (window.innerHeight > 950) {
        alert("This should run");
        animatePoints(pointsArray);
    }
    var sellingPoints = document.getElementsByClassName('selling-points') [0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener("scroll", function(event) {
        console.log("scrolled here");
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            console.log("should animate here");
            animatePoints(pointsArray);
        }
    });
}
