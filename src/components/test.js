const sum = (x,y) => x + y;

console.log("sum: 4 and 6", sum(4, 6));
console.log("sum: 4 and 7", sum(4, 7));
console.log("sum: 4 and 8", sum(4, 8));

const complexCalc = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x === 13) {
                reject("Cannot operate on 13");
            }  else {
                resolve(x * y);
            }
        }, 5000);
    })
}

console.log(complexCalc(10, 20));
console.log(sum(12, 23));
complexCalc(10, 20);
console.log(sum(1, 4));

complexCalc(75, 25)
.then(res => {
    console.log("Resolved successfully");
    console.log(res);
})
console.log(sum(9, 4));

const ans =await complexCalc(2, 4);
console.log(sum(ans, 3));

complexCalc(12, 5)
.then(res => console.log("RESOLVED", res))
.catch(err => console.log("REJECTED", err));

try{
    const ans2 = await complexCalc(12, 4)
    console.log("SUCCESSFUL", ans2);
}catch(err) {
    console.log("ERROR OCCURED", err);
}