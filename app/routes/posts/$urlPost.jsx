import { useLoaderData } from "@remix-run/react"
import { getPost  } from "~/models/post.server"
import { dateFormat } from "~/utils/helpers"
import styles from '~/styles/blog.css'

export function links(){
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }

export async function loader({ params }){
    const { urlPost } = params
    const post = await getPost(urlPost) 
    
    if(post.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrado'
        })
    }

    return post.data[0].attributes
}

export function meta({ data }){
    if(!data){
        return {
            title: 'Econohopalli - Post no encontrado',
            description: 'Econohopalli, post no encontrado'
        }
    }

    return {
        title: `Guitarra - ${data.title}`,
        description: `Econohopalli, venta de pintura ${data.title}`
    }
}

function Post() {
    const post = useLoaderData()
    const { title, content, publishedAt, image } = post
    
    return (
        <article className="post mt-3">
            <img className="imagen" src={image.data[0].attributes.url} alt={`Imagen de post ${title}`} />
            <div className='contenido'>
                <h3>{ title }</h3>
                <p className='fecha'>{  dateFormat(publishedAt) }</p>
                <p className='texto'>{ content }</p>
            </div>
        </article>
    )
}

export default Post