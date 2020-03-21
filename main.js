const MAX_SIZE = 400;

function getTriangle (size) {
    return `<div style="width: ${size}px;">
        <svg viewBox="0 0 100 100">
            <polygon points="50,0 100,100 0,100"/>
        </svg>
    </div>`;
};

function iterateOverTriangle(iterations) {
    if(typeof iterateOverTriangle.iterations === 'undefined') {
        iterateOverTriangle.iterations = iterations;
    };

    if(iterations <= 1) {
        const size = Math.floor(MAX_SIZE/iterateOverTriangle.iterations);
        iterateOverTriangle.iterations = undefined;
        return getTriangle(size);
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