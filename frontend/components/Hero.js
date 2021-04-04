import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import client from "../client";
import SocialIcons from '../components/SocialIcons';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Hero = ({ home }) => {
  return (
    <div>
      <div className="relative h-144">
      <div className='absolute w-full h-full bg-blue-900 bg-opacity-50 z-10'></div>
        <Image
          layout="fill"
          className="absolute object-cover"
          src={urlFor(home.homeImage).url()}
        />
        <div className='absolute h-full w-full text-white z-20 flex flex-col
         justify-end pb-16 px-6 sm:px-12 lg:px-28'>
            <h1 className='text-4xl font-bold mb-4 md:text-6xl'>{home.title}</h1>
            <p className='text-xl text-gray-100 mb-6'>
                {home.description}
            </p>
            <SocialIcons color="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
