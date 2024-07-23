var text = prompt("Enter the text:");

function indexsum(text) {
    var sum = 0;

    for (var i = 0; i < text.length; i++) {
        sum += i;

    }
    return sum;
}
var result = indexsum(text);
alert("The sum of indexes is:", + result);