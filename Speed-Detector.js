function lookAtSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit){
        return 'Ok';

    }
    else {
        const points = Math.floor((speed - speedLimit) / 5)
        if (points >= 12) {
            return ('License suspended');
        }
        else {
            return `${points}  points`}
        }
    }

console.log(lookAtSpeed(80));
console.log(lookAtSpeed(60));
console.log(lookAtSpeed(50));