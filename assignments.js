function A(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

for (var i = 0; i < 50; i++) {
    console.log(A(0,1001));
}

    