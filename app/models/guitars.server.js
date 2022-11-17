export async function getGuitars(){
    const respuesta = await fetch(`${process.env.API_URL}/guitars?populate=images`)
    return await respuesta.json()
}

export async function getGuitar(name){
    const respuesta = await fetch(`${process.env.API_URL}/guitars?filters[url]=${name}&populate=images`)
    return await respuesta.json()
}