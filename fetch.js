async function loaddata() {
    try {
        // obtener json
        const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }

}

loaddata()