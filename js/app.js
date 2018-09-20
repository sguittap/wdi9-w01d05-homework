console.log('js loaded');

//#1.A
//1.let name = 'shane';
//2.name = 'sean';
//3.const firstName = name;
//4.
//5.writing out in plain enlgish what your code should look like, an outline. it helps structure your code and see it in its entirety.
//6. 75-85% writing, and 15-25% typing code.

//#1.B
//1. let firstVariable = ['Hello World'];
// firstVariable = 42;
// let secondVariable = firstVariable;
// secondVariable = ['the world is on fire'];
// console.log(firstVariable);
//42

//2. const yourName = 'shane'
// console.log('hello, my name is ' + yourName);


//#1.C
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');
// console.log(true != false);
// console.log(false == false == false == false == false == false == true);
// console.log(false ==false)
// console.log(e == 'Kevin');
// console.log(a < b < c);
// console.log(a + a < d);
// console.log(48 == '48');

//#1.D
// const animal = 'chicken';
// if(animal == 'cow'){
//     console.log('mooo');
// }else {
//     console.log('heyy, youre not a cow');
// }

//#1.E
// const age = 12;
// if(age >= 16){
//     console.log('Here are the keys.');
// }
// if(age < 16){
//     console.log('Sorry, youre too young.')
// }
    

//#2
//#A.1
// for(let i=0; i <= 10; i++){
//     console.log(i);
// }

//#A.2
//for(let i=10; i<=400; i++){
//     console.log(i);
// }

//#A.3
// for(let i =12; i<=400; i++){
//     if(i%3===0){
//     console.log(i);
//     }
// }

//#B.1/2
// for(let i=1; i<=100; i++){
//     if(i%2===0){
//         console.log(i + ' <-- is an even number');
//     }
// }

//#C.1
// for(let i=0; i<=100; i++){
//     if(i%5===0){
//         console.log(`I found a ${i}. high five`);
//     }
//    if(i%3===0){
//        console.log(`I found a ${i}. three is a crowd`)
//    }
// }

//#D.1
// let bankAccount=0;
// for(let i=1; i<=10; i++){
//     bankAccount += i;
// }
// console.log(bankAccount);

//#D.2
// let payRaise=0;
// for(let i=1; i<=100; i++){
//     payRaise += i*2;
// }
// console.log(payRaise);

//#E
//already did it previously. skippiinnggggg thisssss onneeee

//#3.A
//1.elements
//2.no
//3. a to-do-list?

//#B.1
//const quotes =['this', 'that', 'there'];

//#C
// const randomThings = [1, 10, "Hello", true]
// randomThings[0];
// randomThings[2] = 'World';
// console.log(randomThings);

//#D
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// ourClass[3];
// ourClass[4] = 'octocat';
// ourClass.push('cloud city');
// console.log(ourClass);

//#E
// const myArray = [5, 10, 500, 20];
// myArray.push('egon', 'ryan');
// myArray.shift();
// myArray.unshift('bob marley');
// myArray.pop();
// myArray.reverse();


// console.log(myArray);

//#F
// const num = 100;
// if(num < 100){
//     console.log('little number');
// } else if(num >= 100){
//     console.log('big number');
// }

//#G
// const num = 6;
// if(num < 5){
//     console.log('little number');
// }
// else if(num > 10){
//     console.log('big number');
// } else{
//     console.log('monkey');
// }

//#H
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//1.console.log(`kristyn is rocking that ${kristynsCloset[2]} today!`);
//2.kristynsCloset.splice(6,0,'giant dildo');
//3.kristynsCloset[5]='stained yellow hat';
//4.thomsCloset[0][2];
//5.thomsCloset[1][1];
//6.thomsCloset[2][0];
//7.console.log(`thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][1]} and ${thomsCloset[2][0]}!`);
//8. thomsCloset[1][2]='footies pajamas';
// console.log(thomsCloset);

//#4.A
// const printGreeting = (name) => {
//     console.log(`hi ${name}`);
// }
// printGreeting('shane');
//i didnt read it, but here it is.

//#B
// const printCool = (name) => {
//     console.log(`${name} is cool`);
// }
// printCool('captain reynolds');

//#C
// const calculateCube = (num) =>{
//     return (num * num * num);
// }
// console.log(calculateCube(5));

//#D
// const isVowel = (character) => {
//     character = character.toLowerCase();
//     if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//         return true;
//     } else {
//         return false;
//     }
// }

//#E
// const getTwoLengths = (str1,str2) => {
//     let str1Count = 0;
//     let str2Count = 0;
// for(let i=0;i <str1.length; i++){
//     str1Count += 1;
// }
// for(let i=0;i <str2.length; i++){
//     str2Count += 1;
//     }
//     return [str1Count,str2Count];
// }
// console.log(getTwoLengths('hank', 'hippapotamus'));

//#E
// const getMultipleLengths = (arr) => {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++ ){
//         newArray.push(arr[i].length);
//       }
//       return newArray;
// }
// console.log(getMultipleLengths(["hey", "vato", "what", "you", "doing"]));

//#G
// const maxOfThree = (num1, num2, num3) => {
//     return Math.max(num1, num2, num3);
// }
// console.log(maxOfThree(3,4,5));

//#H
// const printLongestWord = (arr) => {
//     let longWord = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > longWord.length){
//             longWord = arr[i];
//         }
//     } return longWord;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//#I
// const transmogrify = (num1, num2, num3) => {
//     return (num1 * num2) ** num3;
// }
// console.log(transmogrify(1,2,5,));

//#J //IDK..
// const reverseWordOrder = (str) => {
//     const newArray = [];
//     let word = '';
//     for(let i= 0; i<str.length; i++){
//         if(str[i] === ' '){
//             newArray.push(word);
//             word = '';
//         }else{
//             word += str[i];
//         }
//         if(i === str.length-1){
//             newArray.push(word);
//         }
//     }
//     const backwardsWords =[];
//     for(let i = newArray.length-1; i >= 0; i--){
//         backwardsWords.push(newArray[i]);
//     }
//     let resultString = '';
//     for(let i = 0; i < backwardsWords.length; i++){
//         if(backwardsWords.length-1 === i){
//         resultString += backwardsWords[i];
//         }else{
//             resultString+=backwardsWords[i] + ' ';
//         }
//     }
//     return resultString;
// }
// console.log(reverseWordOrder('the world is on fire'));

//#K
//const randomInteger = (num) =>{
//     return Math.floor((Math.random()*1000)+10);
// }
// console.log(randomInteger());
//first number after * will be your max, number after + will be minimum.

// const list =['this','there','that', 'here'];
// const getRandomElement = (str) =>{
//     return list[Math.floor(Math.random()*list.length)];
// }
// console.log(getRandomElement(list));

//OBJECTS
//#A
// const user = {
// name:'shane',
// email:'123@g.com',
// age: 30,
// purchased: [],
// };
// user['email'] = '456@g.com';
// user.age++;
// user.location = 'hawaii';
// user.purchased.push('carbs');
// user.purchased.push('peace of mind');
// user.purchased.push('merino jodhpurs');
// console.log(user.purchased[2]);

//#B
// const user = {
//     name:'shane',
//     email:'123@g.com',
//     age: 30,
//     purchased: ['carbs','peace of mind','peppers'],
// };
// user.friend = {
//     name:'grace hopper',
//     age: 23,
//     location:'england',
//     purchased: ['bread','coke','car'],
// }
//console.log(user.friend);
//console.log(user.friend.location);
// user['friend']['age']= 55;
// user.friend.purchased.push('the one ring');
// user.friend.purchased.push('a latte');
//console.log(user.friend.purchased[1]);

// for(let i=0;i<user.purchased.length;i++){
//     console.log(user.purchased[i]);
// }
// for(let i=0;i<user.friend.purchased.length;i++){
//     console.log(user.friend.purchased[i]);
//}

//#G
// const updateUser = () =>{
//     user.age++;
//     user.name = user.name.toUpperCase();
// }
// updateUser();

// const oldAndLoud = (person) =>{
//     person.age++;
//     person.name = person.name.toUpperCase();
// }
// oldAndLoud(user.friend);
// console.log(user.friend);