// const addData = () => {
//     const companyName = document.querySelector('#companyName')?.value;
//     const contactName = document.querySelector('#contactName')?.value;
//     if (companyName && contactName) {

//         // let object = {
//         //     companyName,
//         //     contactName
//         // }

//         let object = {
//             companyName: companyName,
//             contactName: contactName
//         }

//         const requestOptions = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(object),
//         }

//         fetch('https://northwind.vercel.app/api/suppliers', requestOptions)
//             .then(res => res.json())
//             .then((data) => console.log(data))
//     } else {
//         console.log("required");
//     }
// }

const addData = () => {
    const unitPrice = document.querySelector('#unitPrice')?.value;
    if (unitPrice) {
        const formattedPrice = unitPrice.toFixed(2)
        console.log(+formattedPrice);
    } else {
        console.log("required");
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', addData)