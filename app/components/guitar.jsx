import { Link } from '@remix-run/react'

function Guitar({guitar}) {
    
    const {description, images, price, url, name} = guitar
    
    return (
        <div className="guitarra">
            <img src={images.data[0].attributes.formats.small.url} alt={`Imagen pintura ${name}`} />
            <div className="contenido">
                <h3>{name}</h3>
                <p className="descripcion">{description}</p>
                <p className="precio">${price}</p>

                <Link className='enlace' to={`/guitars/${url}`}>Ver Pintura</Link>
            </div>
        </div>
    )
}

export default Guitar