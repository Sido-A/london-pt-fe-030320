const names = ["sam", "vasile", "mimi", "archibald"]; // Arrays

const person = {
  name: "sam"
}; // Objects


const first = names[0]; // namesの一番最初がfirstに代入される
console.log(first);

const last = names[names.length - 1]; // namesの一番最後がlastに代入される
console.log(last);

const moreNames = [first, last, "benny"];
console.log(moreNames);


// const names = {
//     0: "sam",
//     1: "vasile",
//     2: "mimi",
//     length: 3
// }

console.log(typeof person); // Object
console.log(typeof names); // Object
console.log(Array.isArray(names)); //True

// names[0]
// person["name"]

const ages = [346, 235, 2, 56];

////////////////////////////////////////////////////////////////////
const functions = [
  function() {
    console.log("first function in my list of functions");
    return "return value from first function";
  },
  function() {
    console.log("second function in my list of functions");
    return "return value from second function";

  },
  function() {
    console.log("third function in my list of functions");
    return "return value from third function";

  }
];

// const someFunctions = functions.splice(1, 1);
// const aFunction = someFunctions[0];
// console.log(aFunction);
// aFunction();



console.log(functions[2]());
//third function in my list of functions
//return value from third function

console.log(functions[1]());
// second function in my list of functions
// return value from second function
////////////////////////////////////////////////////////////////////

// const randomThings = ["hi", true, 30, function() {}, [5, ["goodbye"]]];

// randomThings[randomThings.length - 1][1][0];

////////////////////////////////////////////////////////////////////
//const names = ["sam", "vasile", "mimi", "archibald"]; // Arrays
//const person = {   name: "sam"}; // Objects
function firstAndLastInTheirOwnArray(array) {
  return [array[0], array[array.length - 1]]; //sam , archibaldが出力される
}

//function firstAndLastInTheirOwnArray(array=> namesが代入) { 
//return [array=> namesが代入[0], array=> namesが代入[array=> namesが代入.length - 1]]; //
//}

console.log(firstAndLastInTheirOwnArray(names)); //arrayへ代入 
console.log(firstAndLastInTheirOwnArray([6, 3, 7, 4, 6, 45])); // 6,45(最初と最後が出力される)
///////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
// const names = ["sam", "vasile", "mimi", "archibald"]; // Arrays
//const person = {   name: "sam"}; // Objects
function nextPersonInLine(currentLine) { // currentLineにnamesが代入
  const personToBeServed = currentLine.shift(); //samがshiftされ
  console.log(`next person to be served is ${personToBeServed}`); //personToBeServedへ代入
}

//nextPersonInLine(names); // 1: currentLineにnamesが代入
//nextPersonInLine(names); // 2: currentLineにnamesが代入、一回目のコマンドでsamがshiftされているため次の出力はvasile


////////////////////////////////////////////////////////////////////
// const names = ["sam", "vasile", "mimi", "archibald"]; // Arrays

function joinTheLine(name, currentLine) { // patrickがnameへ代入され、namesがcurrentLineへ代入
  const newLength = currentLine.push(name); // newLengthへ、currentLine(namesの代わり)の尻に追加されたnameを合わせた配列の合計が代入されるようにする
  console.log(`${name} is currently ${newLength} in line`); // name=patrick, neLength=namesの配列の合計値
}

// joinTheLine("patrick", names); //このコマンドだけ走らせたら patrick is currently 5 in lineが出力
// joinTheLine("florence", names);
////////////////////////////////////////////////////////////////////
// const names = ["sam", "vasile", "mimi", "archibald"]; // Arrays

function ejectRowdyPeople(  numberOfPeopleToEject,  // 2
  firstPersonToEject,  // mimi
  currentLine // names
) {
  const indexOfPersonToEject = currentLine.indexOf(firstPersonToEject); 
  // indexOfは指定された値が最初に現れたインデックスを返す、下の例の場合は2をmimiを指定しているのでmimiを返す

  const ejectedPeople = currentLine.splice(   // .spliceは指定された値～(から)を意味する
    indexOfPersonToEject, // mimiが渡される
    numberOfPeopleToEject // 2が渡される
  );
  // 例の場合はmimiから2つなので、archibaldも含まれる

  console.log(
    `${ejectedPeople.join(" and ")} have been ejected from the line!!`
  );// joinメソッドを使用することで、Array（配列）の指定した区切り記号文字列で
  //区切られた各要素を指定した文字列で連結することができます
  //例の場合は配列の間にandを入れるように指定している
}

// 例
// ejectRowdyPeople(2, "mimi", names); //mimi and archibald have been ejected from the line!!が出力
// numberOfPeopleToEject=>2,  firstPersonToEject=>mimi,  currentLine=> namesそれぞれに代入

////////////////////////////////////////////////////////////////////
// const names = ["sam", "vasile", "mimi", "archibald"]; // Arrays

function impatientPersonLeavesLine(currentLine) { // currentLine=>names
  const personWhoLeftLine = currentLine.pop(); //personWhoLeftLineへnamesの最後の値が渡される
  console.log(`${personWhoLeftLine} got impatient and left the line`); 
}


// impatientPersonLeavesLine(names); //archibald got impatient and left the lineが出力
// console.log(names.length); // 上でarchibaldがpop(尻落とし)したため3に減り、出力される


////////////////////////////////////////////////////////////////////

joinTheLine("patrick", names);
joinTheLine("florence", names);

// pass by reference
nextPersonInLine(names);
nextPersonInLine(names);
joinTheLine("malika", names);
nextPersonInLine(names);
joinTheLine("benny", names);
nextPersonInLine(names);
joinTheLine("gergana", names);

// console.log(names.indexOf("gergana"));

// ejectRowdyPeople(3, "malika", names);


////////////////////////////////////////////////////////////////////
// const names = ["sam", "vasile", "mimi", "archibald"]; // Arrays
console.log(names); //[ 'sam', 'vasile', 'mimi', 'archibald' ]
console.log(`${names}`); //sam, vasile, mimi, archibald
console.log(names.join(" and ")); // sam and vasile and mimi and archibald

impatientPersonLeavesLine(names);
console.log(names.length);



// names.shift();
// names.unshift("joe");
// names.push("joe");
// names.pop();


//下はおまけに近い...
function reverseTheLineOrder(currentLine) {
  currentLine.reverse();
}

reverseTheLineOrder(names);
console.log(names);

console.log(names.sort());
console.log(ages.sort());
