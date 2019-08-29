export default {
    getStarPositions
}

function getStarPositions() {
    let positions = [];
    let star_frequency = 20;
    for (let index = 0; index < star_frequency; index++) {
        positions.push({
            x: Math.random(),
            y: Math.random(),
            size: Math.random() * 2
        })
    }
    return positions;
}