const MAX_SIZE = 400;

function getTriangle () {
    return `<div style="flex:45% 0 0;">
        <svg viewBox="0 0 100 100">
            <polygon points="50,0 100,100 0,100"/>
        </svg>
    </div>`;
};

function iterateOverTriangle(iterations) {
    if(iterations <= 1) {
        return getTriangle();
    } else {
        return `<div style="display: flex; flex-wrap: wrap; flex: 45% 0 0; justify-content: space-around;">${iterateOverTriangle(iterations-1).repeat(3)}</div>`;
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