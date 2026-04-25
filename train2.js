console.log("Jack Ma Maslaxatlari");
const list = [
    "yaxshi talaba bo'ling", //0-20
    "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
    "o'z ustingizda ishlashni boshlang ", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", //40-50
    "Yoshlarga invest qiling", // 50-60
    "endi dam oling, oz qoldi buyog'i!", //60
];

// Callback function
function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]); 
    else if (a > 20 && a <= 30) callback(null, list[1]); 
    else if (a > 30 && a <= 40) callback(null, list[2]); 
    else if (a > 40 && a <= 50) callback(null, list[3]); 
    else if (a > 50 && a <= 60) callback(null, list[4]); 
    else {
        callback(null, list[5]);
    }
}
 
maslahatBering(10,( err, data) => { 
    if (err) console.log("ERROR:", err); 
    console.log("javob:", data);
});
// async function
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];  
//     else if (a > 20 && a <= 30) return list[1]; 
//     else if (a > 30 && a <= 40) return list[2]; 
//     else if (a > 40 && a <= 50) return list[3]; 
//     else if (a > 50 && a <= 60) return list[4]; 
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 4000);
//         }); 
//     }
// }
        // setTimeout(function () {
        // return lsit[5]; 
        // }, 4400);
    

// call via then/catch 
// console.log("passed here 0");
// maslahatBering(66)
// .then((data) => { 
    // console.log ("javob:", data); 
    // })
    // .catch((err) => {
        // console.log("ERROR";, err)
    // });
    // console.log("passed here 1");

// call via async/await
// async function  run () {
// let javob = await maslahatBering(20);
// console.log(javob);
// javob = await maslahatBering (33);
// console.log(javob);
// javob = await maslahatBering(44);
// console.log(javob);
// }

// run();