import { useLoaderData } from "@remix-run/react";
import GuitarList from "~/components/guitar-list";
import PostList from "~/components/post-list";
import { getGuitars } from "~/models/guitars.server";
import { getBlogs } from "~/models/post.server";
import { getCurso } from "~/models/curso.server";
import stylesGuitars from '~/styles/guitars.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import Curso from "~/components/curso";

export function meta(){
  return {
    title: 'Econohopalli - Home',
    description: 'Econohopalli, Venta de pintura '
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitars
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader(){
  const [ guitars, posts, curso ] = await Promise.all([
    getGuitars(),
    getBlogs(),
    getCurso()
  ])

  return {
    guitars: guitars.data,
    posts: posts.data,
    curso: curso.data
  }
}

export default function Index() {
  const { guitars, posts, curso } = useLoaderData();
  
  return (
    <>
      <main className="contenedor">
        <GuitarList 
          guitars={guitars}
        />  
      </main>
      <Curso 
        curso={curso.attributes}
      />
      <main className="contenedor">
        <PostList
          posts={posts}
        />
      </main>
    </>
  );
}
