import client from "../client";
import groq from "groq";
import Hero from "../components/Hero";
import Posts from "../components/Posts";

export async function getStaticProps() {  // TODO: pagination for posts... (SWR with next)
  const query = groq`
  {
    "posts": *[_type == 'post']{title, mainImage, publishedAt, slug,
      'categories': categories[]->title,
      'authorName': author->name,
      'authorSlug': author->slug,
    },
    "home": *[_type == 'homepage']
  }
    
  `;

  const data = await client.fetch(query);
  // console.log(data);

  return {
    props: {
      posts: data.posts,
      home: data.home[1],
    },
  };
}

export default function Home({ posts, home }) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto bg-white">
        <Hero home={home} />
        <div className="px-6 md:flex md:pt-20">
          <div className='md:w-96 md:text-center'>
            <h2 className="my-10 text-gray-900 font-bold text-2xl">
              Latest Posts
            </h2>
          </div>
          <Posts posts={posts} />
        </div>
      </div>
    </div>
  );
}
