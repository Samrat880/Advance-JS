function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched Successfully")
            }else{
                reject("Error while fetching data")
            }
        }, 3000);
    })
}

fetchData()
    .then((data) => {console.log(data);
        return 'Samrat'
    })
    .then((value) => console.log(value))
    .catch((erro) => console.error(erro))