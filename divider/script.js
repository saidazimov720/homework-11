var c = [];

for (var i = 0; i < 301; i++) {
    c.push(i);
}

for (var i = 0; i < c.length; i++) {
    c[i] = 'someone';
}

var indexes = [];

for (var i = 0; i < c.length; i++) {
    if (c[i] = 'someone') {
        indexes.push(i);
        c[i] = i;
    }
}

console.log(indexes);
console.log(c);
