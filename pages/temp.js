/* eslint-disable */

import { createClient } from '../prismicio'

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      <li>AAAAHHHHH</li>
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps({ previewData }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  // return {
    // props: {
      // posts,
    // },
  // }

  const client = createClient({ previewData })
  const document = await client.getSingle('homepage')
  return {
    props: { document }
  }

}

export default Blog

// export const Temp = () => (
  // <div>
    // <h1>temp</h1>
  // </div>
// )
//
// export default Temp
//
// // customtypes/homepage:
// // "id": "homepage",
// // json.Hero
// // json.uid
// // https://prismic.io/docs/technologies/fetch-data-nextjs#perform-a-query
//
// /*
// export const getStaticProps = async ({ previewData }) => {


  // const client = createClient({ previewData })
//
  // const document = await client.getSingle('homepage')
//
  // // const document = await client.getByUID('blog', 'my-blog-post', {
  // //  fetchLinks: 'author.author_name',
  // // })
//
  // return {
    // props: { document },
  // }
// }
// */
