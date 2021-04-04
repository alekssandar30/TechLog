import groq from "groq";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // happens on the server side
  const { slug } = params;

  /* try and fetch data and then show data, if we dont get data -> 404 */
  const query = groq`
    *[_type == 'post' && slug.current == '${slug}'][0]{
        ...,
        'author': author->name
    }
  `;

  const data = await client.fetch(query);
  // console.log(data);

  return {
    revalidate: 60 * 60 * 24,
    props: {
      post: data,
    },
  };
}

const SinglePost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    // show loading spinner
    return <h1>Loading...</h1>;
  }

  if (!post) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />;
      </>
    );
  }

  return (
    <div className="bg-gray-300">
      <div className="max-w-screen-2xl mx-auto bg-white min-h-screen">
        <div className="px-4 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 py-4">
            {post.title}
          </h1>
          <div className='flex space-x-5 text-sm text-gray-500'>
            <span className="text-blue-500 block pb-4">{post.author}</span>
            <span>{new Date(post.publishedAt).toDateString()}</span>
          </div>

          <Image width={800} height={500} src={urlFor(post.mainImage).url()} />

          <div className='prose max-w-2xl'>
            <BlockContent blocks={post.body} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
