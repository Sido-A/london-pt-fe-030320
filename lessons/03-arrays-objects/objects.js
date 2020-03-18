// const name = "name"
const jasper = {
  name: "Jasper",
  age: 2,
  breed: "Exotic shorthair",
  "favourite Foods": ["Sardines", "Tuna"]
};

console.log(jasper.name); // Jasper
console.log(jasper.age); //2
console.log(jasper);
// {
// name: 'Jasper',
//  age: 2,
//**    breed: 'Exotic shorthair',
//        'favourite Foods': ['Sardines', 'Tuna']
// }

jasper.BFF = "Archibald"; // jasper.BFF = "Archibald"を追加
console.log(jasper);

// {
//  name: 'Jasper',
//    age: 2,
//      breed: 'Exotic shorthair',
//        'favourite Foods': ['Sardines', 'Tuna'],
//          BFF: 'Archibald'
// }


console.log(jasper["favourite Foods"]); // ['Sardines', 'Tuna']


const curtain = {
  name: "Curtain",
  age: 3,
  breed: "Siamese",
  "favourite Foods": ["Chocolate", "Milk"]
};

const cats = [jasper, curtain];

 // console.log(cats[0].name); // Jasper


console.log(cats[1]["favourite Foods"].push("Berries")); // 3
console.log(cats[1]);
// {
//  name: 'Curtain',
//    age: 3,
//      breed: 'Siamese',
//        'favourite Foods': ['Chocolate', 'Milk', 'Berries']
// }
