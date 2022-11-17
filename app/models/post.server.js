export async function getBlogs(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=image`)
    return await respuesta.json()
}

export async function getPost(name){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${name}&populate=image`)
    return await respuesta.json()
}