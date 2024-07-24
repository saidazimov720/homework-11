var c = [];

for (var i = 0; i < 301; i++) {
    c.push(i);
}

var indexes = [];

for (var i = 0; i < c.length; i ++) {
    c[i] = `someone${i}`;
    indexes.push(i);
}

console.log(c);

for (var i = 0; i < indexes.length; i++) {
    c[indexes[i]] = indexes[i];
}

console.log(indexes);
