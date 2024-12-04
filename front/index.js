function user(){

    var nome = document.getElementById("user").value

    // const response = fetch('http://localhost:8000/user', {
    //     body: JSON.stringify({username: "example"})
    // })

    const url = 'http://localhost:8000/user'

    fetch(url,{ mode: 'no-cors'}, {
        method: 'POST', 

        headers:{
            'Content-Type' : 'aplication/json'
        },
        body: JSON.stringify(nome)

    })

    console.log(nome)
        
}



// function a (){

//     const url = 'http://localhost:8000/hello'

//     fetch (url)
//         .then(response => response.json())
//         .then(data => console.log(data))
// }


// a()

