const express = require("express");
const app = express();

// ===========================================>>>
// Mitask *k*
// ===========================================>>>

function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("string")); // 1
console.log(countVowels("hello"));  // 2

// ===========================================>>>
// Mitask *I*
// ===========================================>>>

// function findLongestWord(text) {
//     let words = text.split(" ");
//     let longestWord = "";

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWord("I came from Uzbekistan!"));

// ===========================================>>>
// Mitask *I*
// ===========================================>>>
// function findMostRepeated(numbers) {
//     let maxCount = 0;
//     let mostRepeated = numbers[0];

//     for (let i = 0; i < numbers.length; i++) {
//         let count = 0;

//         for (let j = 0; j < numbers.length; j++) {
//             if (numbers[i] === numbers[j]) {
//                 count++;
//             }
//         }

//         if (count > maxCount) {
//             maxCount = count;
//             mostRepeated = numbers[i];
//         }
//     }

//     return mostRepeated;
// }

// const nums = [1, 2, 3, 4, 5, 4, 3, 4];

// console.log(findMostRepeated(nums)); // 4



// ===========================================>>>
// Mitask *H*
// ===========================================>>>

// function getPositive(numbers) {

//     let positiveNumbers = "";

//     for (let i = 0; i < numbers.length; i++) {

//         let currentNumber = numbers[i];

//         if (currentNumber > 0) {

//             positiveNumbers += currentNumber;
//         }
//     }

//     return positiveNumbers;
// }


// Testing
// console.log(getPositive([1, -4, 2]));           

// console.log(getPositive([-2, 3, 8, -9, 7, 6]));

// console.log(getPositive([5, -1, 9, 0, -7]));



// ===========================================>>>
// Mitask *G*
// ===========================================>>>
/*function getHighestIndex(numbers) {

    let highest = numbers[0];
    let highestIndex = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] > highest) {
            highest = numbers[i];
            highestIndex = i;
        }

    }

    return highestIndex;
}


let numbers1 = [5, 21, 12, 21, 8];
console.log(getHighestIndex(numbers1));

let numbers2 = [1, 2, 3, 4, 5];
console.log(getHighestIndex(numbers2));

let numbers3 = [99, 12, 45, 67];
console.log(getHighestIndex(numbers3));

let numbers4 = [7, 7, 7, 7];
console.log(getHighestIndex(numbers4));

let numbers5 = [-5, -1, -9, -3];
console.log(getHighestIndex(numbers5));
*/

// // ===========================================>>>
// // Mitask *F*
// // ===========================================>>>

function findDoublers(text) {

    text = text.toLowerCase();

    for(let i = 0; i < text.length; i++) {

        for(let j = i + 1; j < text.length; j++) {

            if(text[i] == text[j]) {
                return true;
            }

        }

    }

    return false;

}

console.log(findDoublers("World"));
console.log(findDoublers("Hello"));
// // ===========================================
// // Mitask *E*
// // ===========================================
// function getReverse(str) {
//   return str.split('').reverse().join('');
// }

// // Testing
// console.log(getReverse("hello"));  
// console.log(getReverse("salomaaat"));  
// console.log(getReverse("JavaScript zo'r")); 




// // ===========================================
// // Mitask *D*
// // ===========================================
// function checkContent(FirsWord, secondWord) {
//   if (typeof FirsWord !== "string" || typeof secondWord !== "string") return false;
//   if (FirsWord.length !== secondWord.length) return false;

//   const tartiblash = (word) =>
//     word.toLowerCase().split("").sort().join("");

//   return tartiblash(FirsWord) === tartiblash(secondWord);
// }

// // Example
// console.log(checkContent("mitgroup", "gmtiprou"));


// ===========================================
// Mitask *C*
// ===========================================

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non
//     this.lagmon = lagmon
//     this.cola = cola
//   }

//   vaqt() {
//     const d = new Date()
//     let h = d.getHours()
//     let m = d.getMinutes()

//     if (h < 10) h = "0" + h
//     if (m < 10) m = "0" + m

//     return h + ":" + m
//   }

//   qoldiq() {
//     const t = this.vaqt()
//     const msg = "Hozir " + t + "da " + this.non + "ta non, " + this.lagmon + "ta lag'mon va " + this.cola + "ta cola mavjud"
//     console.log(msg)
//     return msg
//   }

//   sotish(nomi, soni) {
//     if (nomi == "non") {
//       if (this.non >= soni) {
//         this.non -= soni
//       } else {
//         console.log("non yetarli emas")
//       }
//     } else if (nomi == "lagmon") {
//       if (this.lagmon >= soni) {
//         this.lagmon -= soni
//       } else {
//         console.log("lag'mon yetarli emas")
//       }
//     } else if (nomi == "cola") {
//       if (this.cola >= soni) {
//         this.cola -= soni
//       } else {
//         console.log("cola yetarli emas")
//       }
//     } else {
//       console.log("bunaqa mahsulot yoq")
//     }
//   }

//   qabul(nomi, soni) {
//     if (nomi == "non") {
//       this.non += soni
//     } else if (nomi == "lagmon") {
//       this.lagmon += soni
//     } else if (nomi == "cola") {
//       this.cola += soni
//     } else {
//       console.log("bunaqa mahsulot yoq")
//     }
//   }
// }

// const shop = new Shop(4, 5, 2)

// shop.qoldiq()
// shop.sotish("non", 3)
// shop.qabul("cola", 4)
// shop.qoldiq()





// ===========================================
// Mitask *B*
// ===========================================

// function getNumberCount(text) {
//   let digitsCount = 0;

//   for (let char of text) {
//     if (!isNaN(char) && char !== " ") {
//       digitsCount++;
//     }
//   }

//   return digitsCount;
// }

// console.log(getNumberCount("Abdulloh ID: 20051008"));

// =========================================== //
// MiTask *A*
// ========================================== //
// function berilganharflarnisanash(harf, soz) {
//     let count = 0;
//     for (let i = 0; i < soz.length; i++) {
//         if (soz[i] === harf) {
//             count++;
//         }
//     }
//     return count;
// }

// app.get("/", (req, res) => {
//     const result = berilganharflarnisanash("o", "Salom mening ismim Odiljon, Yoshim 45da, Koreya yeongcheon shaxrida istiqomat qilaman, O'zbekman.");
//     res.send(`Natija: ${result}`);
// });


// app.listen(3000, () => {
// console.log("Natijani shu saytdan ko'rishingiz mumkun!!! http://localhost:3000");
// });
// // ================================================================================================================================
// console.log("Jack Ma Maslaxatlari");
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "o'z ustingizda ishlashni boshlang ", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "Yoshlarga invest qiling", // 50-60
//     "endi dam oling, oz qoldi buyog'i!", //60
// ];

// // Callback function
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]); 
//     else if (a > 20 && a <= 30) callback(null, list[1]); 
//     else if (a > 30 && a <= 40) callback(null, list[2]); 
//     else if (a > 40 && a <= 50) callback(null, list[3]); 
//     else if (a > 50 && a <= 60) callback(null, list[4]); 
//     else {
//         callback(null, list[5]);
//     }
// }
 
// maslahatBering(10,( err, data) => { 
//     if (err) console.log("ERROR:", err); 
//     console.log("javob:", data);
// });
// // async function
// // async function maslahatBering(a) {
// //     if (typeof a !== "number") throw new Error("insert a number");
// //     else if (a <= 20) return list[0];  
// //     else if (a > 20 && a <= 30) return list[1]; 
// //     else if (a > 30 && a <= 40) return list[2]; 
// //     else if (a > 40 && a <= 50) return list[3]; 
// //     else if (a > 50 && a <= 60) return list[4]; 
// //     else {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 resolve(list[5]);
// //             }, 4000);
// //         }); 
// //     }
// // }
//         // setTimeout(function () {
//         // return lsit[5]; 
//         // }, 4400);
    

// // call via then/catch 
// // console.log("passed here 0");
// // maslahatBering(66)
// // .then((data) => { 
//     // console.log ("javob:", data); 
//     // })
//     // .catch((err) => {
//         // console.log("ERROR";, err)
//     // });
//     // console.log("passed here 1");

// // call via async/await
// // async function  run () {
// // let javob = await maslahatBering(20);
// // console.log(javob);
// // javob = await maslahatBering (33);
// // console.log(javob);
// // javob = await maslahatBering(44);
// // console.log(javob);
// // }

// // run();