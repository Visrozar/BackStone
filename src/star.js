export default {
    getStarPositions
}

function getStarPositions() {
    let positions = [];
    for (let index = 0; index < 10; index++) {
        positions.push({
            x: Math.random(),
            y: Math.random(),
            size: Math.random()
        })
    }
    return positions;
}