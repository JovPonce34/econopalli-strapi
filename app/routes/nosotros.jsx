import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return {
    title: 'Econohopalli - Sobre Nosotros',
    description: 'Econohopalli, acerca de nosotros'
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Somos una empresa socialmente responsable, dedicada a la elaboración de pinturas ecológicas a base de nopal, con la finalidad de contribuir al mejoramiento del medio ambiente con un tipo de pintura que no será dañina ni para el ser humano ni para el medio ambiente.</p>
          <p>Nuestro producto ofrece el mejoramiento de las características de las pinturas comunes, siendo esta mas económica, mucho mas amable con el medio ambiente y sobre todo benéfica para las vivienda o edificios. </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros