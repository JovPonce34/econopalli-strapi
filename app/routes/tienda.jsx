import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import GuitarList from "~/components/guitar-list"
import styles from "~/styles/guitars.css"


export function meta(){
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA, Nuestra coleccion de guitarras'
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const guitars = await getGuitars()
  return guitars.data
}

function Tienda() {
  const guitars = useLoaderData()
  return (
    <main className="contenedor">
      <GuitarList 
        guitars={guitars}
      />
    </main>
  )
}

export default Tienda