var c = [];

for (var i = 0; i < 301; i++) {
    c.push({name: `someone${i}`});
    console.log(c[i]);
}
var myArray = c.map(obj => obj.name);
console.log(myArray);
