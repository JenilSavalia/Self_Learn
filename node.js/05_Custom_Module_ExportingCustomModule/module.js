console.log('This is Module')

//Below is avarage function made with foreach loop
function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

module.exports = average


module.exports = {
    avg: average,
    name: 'Harry',
    repo: 'xyz'
}


