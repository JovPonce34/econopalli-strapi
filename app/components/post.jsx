import { Link } from "@remix-run/react"
import { dateFormat } from '~/utils/helpers'

export default function Post({ post }) {
    const { title, content, url, publishedAt, image } = post
    return (
        <article className="post">
            <img className="imagen" src={ image.data[0].attributes.formats.small.url } alt={ `imagen blog ${title}` } />
            <div className="contenido">
                <h3>{ title }</h3>
                <p className="fecha">{ dateFormat(publishedAt) }</p>
                <p className="resumen">{ content }</p>
                <Link className="enlace" to={ `/posts/${url}` }>Leer Post</Link>
            </div>
        </article>
    )
}
