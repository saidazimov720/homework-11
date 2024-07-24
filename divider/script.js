var c = [];

for (var i = 0; i < 301; i++) {
    c.push(i);
}

var d = [];

for (var i = 0; i < c.length; i ++) {
    c[i] = `someone${i}`;
    d.push(i);
}

console.log(c);

for (var i = 0; i < d.length; i++) {
    c[d[i]] = d[i];
}

console.log(d);
