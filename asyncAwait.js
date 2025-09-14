function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({name:"Samrat", url:"https://chaicode.com"})
        },3000)
    })
}

async function getUserData() {
    try {
        console.log("fetching user Data.....")
        await fetchUserData ()
        const userData = await fetchUserData();
        console.log("User data fetched successfully")
        console.log("User data: ", userData)
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

getUserData();