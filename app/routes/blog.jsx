import { useLoaderData } from '@remix-run/react'
import PostList from '~/components/post-list'
import { getBlogs } from '~/models/post.server'
import styles from '~/styles/blog.css' 

export function meta() {
  return{
    title: 'Econohopalli - Nuestro Blog',
    description: 'Econohopalli, Blog de pintura '
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
  const posts = await getBlogs()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  console.log(posts)
  return (
    <main className="contenedor">
      <PostList 
        posts={posts}
      />
    </main>
  )
}

export default Blog