function getTriangle () {
    return '<svg>' +
    '<polygon points="50,0 100,100 0,100"' +
    'style="fill:black;stroke:lime;stroke-width:3;fill-rule:nonzero;" />' +
  '</svg>';
};

function iterateOverTriangle(iterations) {
    let result = '';
    for(let i=0; i<iterations; i++) {
        result += getTriangle();
    }
    return result;
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