function d6() {
    var roll = Math.random();
        roll=Math.ceil(roll*5+1)
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
