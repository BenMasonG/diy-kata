const humanCatDogYears = number => {
    if (number === 1) {
        return [1,15,15]
    } if (number === 2) {
        return [2,24,24]
    } if (number > 2) {
        return [number, 24 + ((number -2) * 4), 24 + ((number -2) * 5)]
    } if (number === 0) {
        return [0, 0, 0]
    } if (number < 0) {
        return "Error, humans, cats and dogs can't have an age of less than 0"
    }
};

module.exports = humanCatDogYears;
