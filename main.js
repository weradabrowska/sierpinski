function getTriangle () {
    return '<svg viewBox="0 0 100 100">' +
    '<polygon points="50,0 100,100 0,100"/>' +
  '</svg>';
};

function iterateOverTriangle(iterations) {
    console.log(iterations)
    if(iterations <= 1) {
        return getTriangle();
    } else {
        return iterateOverTriangle(iterations-1).repeat(3);
    }
}

function getIteratedTriangle (iterations) {
    if(isNaN(iterations) || iterations < 1) {
        return 'please enter positive integer...';
    }

    const htmlTriangle = iterateOverTriangle(iterations);
    return htmlTriangle;
};

function draw () {
    const iterationsNumber = document.getElementById('iterations').value;
    const triangleContainer = document.getElementById('triangle');
    triangleContainer.innerHTML = getIteratedTriangle(iterationsNumber);
}