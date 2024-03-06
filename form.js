
let cenatovara = 100;
const procent = 10;
const day = 7;

for (let days = 0; days <= cenatovara.length; days++) {
    cenatovara += cenatovara + cenatovara * procent / 100;
   
   
}

console.log("Цена товара за 7 дней будет составлять:", cenatovara.toFixed(2), "рублей");
