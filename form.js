const Numbers = (str) => { 
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] > max) {
           max = str[i];
        }
    } 
    return max
}
    
console.log(Numbers([2,3,4,8,7,5,4,9]));
    
   