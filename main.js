function getPoints (iterations) {

};

function getTriangle (iterations) {
    if(isNaN(iterations) || iterations < 1) {
        return 'please enter positive integer...';
    }

    const points = getPoints(iterations);

    const htmlTriangle = '<svg width="400px" height="400px">' +
    `<polygon points="${points}"` +
    'style="fill:black;stroke:lime;stroke-width:3;fill-rule:evenodd;" />' +
  '</svg>'
    return htmlTriangle;
};

function draw () {
    const iterationsNumber = document.getElementById('iterations').value;
    const triangleContainer = document.getElementById('triangle');
    triangleContainer.innerHTML = getTriangle(iterationsNumber);
}