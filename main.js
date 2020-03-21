function getTriangle () {
    return '<svg viewBox="0 0 100 100">' +
    '<polygon points="50,0 100,100 0,100"' +
  '</svg>';
};

function iterateOverTriangle(iterations) {
    let result = '';
    for(let i=0; i<3; i++) {
        result += getTriangle();
    }
    return `<div class="terce">${result}'</div>`;
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