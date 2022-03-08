const myPromise = new Promise(function (resolve, reject) {
    let success = true;
    if (success) {
        resolve({ category: "Food" })
    } else {
        reject('ERROR !')
    }
})

const myPromise2 = new Promise(function (resolve, reject) {
    let success = true;
    if (success) {
        setTimeout(() => {
            resolve({ name: "Korhan", surname: "Kosece" })
        }, 2000);
    } else {
        reject('ERROR !')
    }
})


// myPromise.then(data => {
//     console.log(1);
//     console.log(data);
// }).catch(err => console.log(err)).finally(() => console.log("done"))

Promise.all([myPromise, myPromise2]).then(data => {
    console.log(1);
    console.log(data);
}).catch(err => console.log(err))

// Promise.race([myPromise2, myPromise]).then(data=> {
//     console.log(1);
//     console.log(data);
// }).catch(err => console.log(err))

console.log(2);