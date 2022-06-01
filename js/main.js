
document.querySelector('#submit').addEventListener('click',getName)

async function getName(){
    let name = document.querySelector('#input').value
    try{
        const response = await fetch(`https://fgo-api.herokuapp.com/api/${name}`)
        const data = await response.json()
        console.log(data)
        for(let keys in data){
            let element = data[keys]
            if(typeof element !== 'object'){
                document.querySelector('#name').innerText += `${element} \n`

            }
        }

    }
    catch(err){
        console.error(err)
    }
}