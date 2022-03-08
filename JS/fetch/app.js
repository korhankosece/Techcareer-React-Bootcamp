// fetch("https://northwind.vercel.app/api/suppliers")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log("Custom err", err));


fetch("https://northwind.vercel.app/api/suppliers")
    .then(response => response.json())
    .then(data => {
        const length = data.length;
        for (let i = 0; i < length; i++) {
            const element = data[i];
            const companyName = element.companyName;
            const liElement = document.createElement('li');
            if (!companyName.includes(' ')) {
                liElement.style.color = "red"
            }
            liElement.innerText = companyName.toUpperCase();
            document.querySelector('#suppliers').appendChild(liElement);
        }
    })