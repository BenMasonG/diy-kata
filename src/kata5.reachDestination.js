const reachDestination = (distance, speed) => {
    const duration = distance / speed 
    const durationRounded = Math.round(duration*2)/2

    if (isNaN(distance) || isNaN(speed)) {
        return "Error. Both distance and speed need to be numbers to calculation the journey duration."
    }; 
    return `I should be there in ${durationRounded} hours.`
};

module.exports = reachDestination;
