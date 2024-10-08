// const kintamasis = 'suo';

// kintamasis = 'karve';

// console.log(kintamasis);

// let kintamasis = 'suo';

// console.log(kintamasis);

// kintamasis = 'karve';

// console.log(kintamasis);

// // Primitive data types
// const str = "Hello";  // String / Text
// let num = 42;       // Number
// let bool = true;    // Boolean
// let empty = null;   // Null
// let notAssigned;    // Undefined

// // Reference data type
// let arr = [1, 2, 3, 'labas', true, null, undefined];  // Array
// let obj = { katesVardas: "Micius", age: 10 };  // Object

// console.log(typeof str, str);    // Output: string
// console.log(typeof num, num);    // Output: number
// console.log(typeof bool, bool);   // Output: boolean
// console.log(typeof empty, empty);  // Output: object (special case)
// console.log(typeof notAssigned, notAssigned);  // Output: undefined
// console.log(typeof arr, arr);    // Output: object
// console.log(typeof obj, obj);    // Output: object

// function Deivis(gimimoMetai) {
//     console.log('Labas as atsidariau laptopa')
//     console.log('Labas as paskaiciavau')
//     gimimoMetai = gimimoMetai + 2;
//     console.log(gimimoMetai)
// }

// const Deivis = (gimimoMetai) => {
//     console.log('Labas as atsidariau laptopa')
//     console.log('Labas as paskaiciavau')
//     gimimoMetai = gimimoMetai + 2;
//     console.log(gimimoMetai)
// }

// Deivis(1997);

// let ivestasAmzius = 20;

// if (18 <= ivestasAmzius) {
//     console.log('zmogus gali losti')
// } else if (16 <= ivestasAmzius) {
//     console.log('zmogus gali transliuoti')
// } else {
//     console.log('metas pietu miegelio vaikeli')
// }

// let ivestasAmzius = 12;

// if (ivestasAmzius === 10) {
//     console.log('ivestas amzius sutampa');
// }

// if (ivestasAmzius !== 10 + 4 + 2 + 1 + 43 + 20) {
//     console.log('ivestas amzius sutampa');
// }

// if (ivestasAmzius !== 10 && ivestasAmzius > 15) {
//     console.log('ivestas amzius sutampa');
// }

// if (ivestasAmzius !== 10 || ivestasAmzius < 10) {
//     console.log('ivestas amzius sutampa');
// }

// if (ivestasAmzius !== 10 && !(ivestasAmzius < 15)) {
//     console.log('ivestas amzius sutampa');
// }

let ivestasAmzius = 12;

if (ivestasAmzius !== 10 && !(ivestasAmzius < 15)) {
  console.log("ivestas amzius sutampa");
}

let sunsAmzius = 2 ** 2;

console.log(sunsAmzius);
