const product = [];
const villes = new Array();

console.log(typeof product, typeof villes);

product.push('console de jeux');
product[1] = "lol";
product[8] = "yessss";
product[product.length] = 'noooonnnnnnnnn';
console.log(product);

let valueOneByOne = product[Symbol.iterator]();
console.log(valueOneByOne.next().value);
console.log(valueOneByOne.next().value);
console.log(valueOneByOne.next().value);
console.log(valueOneByOne.next().value);
console.log(valueOneByOne.next().value);

for (let item of product) {
    console.log(item);
}

for (let i of product) {
    console.log(i);
    console.log(product[i])
}


const nom = "Bastien";
for (let lettre of nom) {
    console.log(lettre);
}
const doubleTap = [[], [[], []]];
//doubleTap[0][1][1] = 'Winner';

for (let i in doubleTap) {
    for (let z in doubleTap[i]) {
        for (let k in doubleTap[i][z]) {
            console.log('test ici :', i, z, k, doubleTap[i][z][k])
        }
    }
}
