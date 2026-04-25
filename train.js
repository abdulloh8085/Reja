const express = require("express");
const app = express();
// =========================================== //
// MiTask *A*
// ========================================== //
function berilganharflarnisanash(harf, soz) {
    let count = 0;
    for (let i = 0; i < soz.length; i++) {
        if (soz[i] === harf) {
            count++;
        }
    }
    return count;
}

app.get("/", (req, res) => {
    const result = berilganharflarnisanash("a", "Software engineer");
    res.send(`Natija: ${result}`);
});


app.listen(3000, () => {
console.log("Natijani shu saytdan ko'rishingiz mumkun!!! http://localhost:3000");
});