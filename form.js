function Numbers(str) {
const num = str
let max = 0;
for (let i = 0; i < num.length; i++) {
    if(num[i] > max) {
       max = num[i];
    }
  } 

console.log(max)
  }

Numbers([2,3,4,8,7,5,4,9,])

