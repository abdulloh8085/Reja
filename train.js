const express = require("express");
const app = express();



// ===========================================
// Mitask *C*
// ===========================================

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non
    this.lagmon = lagmon
    this.cola = cola
  }

  vaqt() {
    const d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()

    if (h < 10) h = "0" + h
    if (m < 10) m = "0" + m

    return h + ":" + m
  }

  qoldiq() {
    const t = this.vaqt()
    const msg = "Hozir " + t + "da " + this.non + "ta non, " + this.lagmon + "ta lag'mon va " + this.cola + "ta cola mavjud"
    console.log(msg)
    return msg
  }

  sotish(nomi, soni) {
    if (nomi == "non") {
      if (this.non >= soni) {
        this.non -= soni
      } else {
        console.log("non yetarli emas")
      }
    } else if (nomi == "lagmon") {
      if (this.lagmon >= soni) {
        this.lagmon -= soni
      } else {
        console.log("lag'mon yetarli emas")
      }
    } else if (nomi == "cola") {
      if (this.cola >= soni) {
        this.cola -= soni
      } else {
        console.log("cola yetarli emas")
      }
    } else {
      console.log("bunaqa mahsulot yoq")
    }
  }

  qabul(nomi, soni) {
    if (nomi == "non") {
      this.non += soni
    } else if (nomi == "lagmon") {
      this.lagmon += soni
    } else if (nomi == "cola") {
      this.cola += soni
    } else {
      console.log("bunaqa mahsulot yoq")
    }
  }
}

const shop = new Shop(4, 5, 2)

shop.qoldiq()
shop.sotish("non", 3)
shop.qabul("cola", 4)
shop.qoldiq()




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