function Reverse(num) {
    num = String(num);

    num = num.split('').reverse().join('');

    num = Number(num);

    return num;
}

console.log(Reverse(12345))