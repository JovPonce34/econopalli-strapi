import { useLoaderData } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'
import styles from '~/styles/guitars.css'

export async function loader({request, params}){
    const { urlGuitar } = params
    const guitar = await getGuitar( urlGuitar )

    if(guitar.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Pintura no encontrada'
        })
    }

    return guitar
}

export function meta({ data }){
    if(!data){
        return {
            title: 'Econohopalli - Pintura no encontrada',
            description: 'Econohopalli, Pintura no encontrada'
        }
    }

    return {
        title: `Econohopalli - ${data.data[0].attributes.name}`,
        description: `Econohopalli, venta de pintura ${data.data[0].attributes.name}`
    }
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Guitar() {
    const guitar = useLoaderData()
    const {name, description, images, price} = guitar.data[0].attributes
    return (
        <main className='contenedor guitarra'>
            <img className='imagen' src={images.data[0].attributes.url} alt={`Imagen Pintura ${name}`} />

            <div className='contenido'>
                <h3>{ name }</h3>
                <p className='texto'>{ description }</p>
                <p className='precio'>${ price }</p>
            </div>
        </main>
    )
}

export default Guitar