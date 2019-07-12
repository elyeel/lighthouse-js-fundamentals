/*
 * Programming Quiz: Laugh (5-4)
 */

let laugh = function(max) { 
    laugh ="";
    for (let j=0;j<max;j++) {
        laugh += "ha";
    }
    laugh += '!';
    return laugh;
};
console.log(laugh(3));
