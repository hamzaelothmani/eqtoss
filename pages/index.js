import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion  } from "framer-motion";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";

const svgVariants = {
  hidden: { y: 2 },
  visible: {
    rotate: 0,
    transition: { duration: 1, delay: 1 },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
},
visible: {
  pathLength: 0.5,
  fill: "rgba(255, 255, 255, 1)",
  transition: { duration: 4 }
}
};

export default function Home() {
  
useEffect(()=>{
  Aos.init({duration: 2000})
})

  return (
    <>
      <div>
        <Head>
          <title>PeapDeal | Home </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

   

<section className="px-3 py-5 bg-neutral-100 lg:py-10">
  <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
    
      <motion.p  animate={{ y: 0, opacity: 1}}
                transition={{
                  duration: 0.5,
                delay: 0.5
                
                }}
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ scale: 1.2 }} className="text-4xl font-bold md:text-7xl  text-violet-800">UP TO 80% OFF</motion.p>
      <p className="text-4xl font-bold md:text-7xl">EVERYDAY SALE</p>
      <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
      <Link href='/ShoppingList' ><button  className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button></Link>
    </div>
    <div className="w-[300px] h-[300px] xl:w-[600px] xl:h-[500px] order-1 lg:order-2">
      <Image width={500} height={400} objectFit="contain" layout="responsive"  quality={75} priority={true}   src="/images/home1.png" alt=""/>
    </div>
  </div>
</section>
      <div className="  flex gap-4 justify-center w-full  text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl xl:mb-0 mb-8  xl:h-16 lg:h-12 md:h-10 sm:h-8 xl:text-4xl lg:text-2xl md:text-xl  text-center  xl:mt-20 lg:mt-16 md:mt-12 mt-6 ">
      

        <h1>Categories</h1>
        
      </div>
      {/* <p className="mt-3 text-center max-w-2xl mx-auto text-xl text-gray-500 è:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p> */}

            {/* <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Categories</h2> */}
      <div className="  ">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          // navigation={true}
          // max-h-52 xl:max-h-[500px]
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper    xl:w-[1200px] "
        >
          {/* xl:w-auto w-36 lg:w-60 md:w-52 */}
          <SwiperSlide>
            <div className=" xl:border-0 border rounded-lg ">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/resto.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* xl:w-[700px] lg:w-[550px] md:w-[450px] w-[300px] */}
            <div className=" xl:border-0 border rounded-lg ">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/grocery.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  xl:border-0 border rounded-lg   ">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/health.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* xl:w-[700px] lg:w-[550px] md:w-[450px] w-[300px] */}
            <div className=" xl:border-0 border rounded-lg  ">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/tech.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" xl:border-0 border rounded-lg  ">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/travel.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* xl:w-[700px] lg:w-[550px] md:w-[450px] w-[300px] */}
            <div className=" xl:border-0 border rounded-lg  ">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/serveces.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* xl:w-[700px] lg:w-[550px] md:w-[450px] w-[300px] */}
            <div className="xl:border-0 border rounded-lg ">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/MM.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* xl:w-[700px] lg:w-[550px] md:w-[450px] w-[300px] */}
            <div className="xl:border-0 border rounded-lg ">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/pet.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* xl:w-[700px] lg:w-[550px] md:w-[450px] w-[300px] */}
            <div className="xl:border-0 border rounded-lg">
              <Image
                width={1000}
                height={1000}
                layout="responsive"
                className="rounded-lg"
                quality={100}
                src="/images/gaming.png"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <section data-aos="fade-up" className="bg-white ">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p className="mb-4">eQToss is committed to providing a website that’s accessible to all visitors. We are actively optimizing to ensure that accessibility tools such as screen readers maintain full compatibility with our site.

eQToss follows the guidance of Web Content Accessibility Guidelines 2.1 (WCAG 2.1) Level AA. If you see room for improvement or just have comments or suggestions, please contact us at support@eQToss.net. We constantly strive to improve the user experience of eQToss for all types of users.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
        <Image className="w-full rounded-lg" width={600} height={800} objectFit="contain" layout="responsive"  quality={75}   src="/images/home2.png" alt=""/>
        <Image className="mt-4 w-full lg:mt-10 rounded-lg" width={600} height={500} objectFit="contain" layout="responsive"  quality={75}   src="/images/home3.png" alt=""/>


            {/* <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/> */}
        </div>
    </div>
</section>

{/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div className="absolute inset-0">
    <div className="bg-white h-1/3 sm:h-2/3"></div>
  </div>
  <div className="relative max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
    </div>
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    
      <div data-aos="fade-right"  className="flex flex-col rounded-lg  overflow-hidden">
        <div className="flex-shrink-0">
        <Image className="w-full rounded-lg" width={200} height={100} objectFit="contain" layout="responsive"  quality={75}   src="/images/home4.png" alt=""/>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline"> Infos </a>
            </p>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">Every Deal is Sourced and Shared by Real People</p>
              <p className="mt-3 text-base text-gray-500">Everyone loves to discover a deal that (almost) no one else knows about. Finding an 80% discount or scoring a luxury trip for a rock bottom price is thrilling. With the community’s votes and commentary you’ll have more confidence in your purchase. That’s winning.</p>
            </a>
          </div>
        
        </div>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>></> */}
      <div data-aos="zoom-in" className="flex flex-col rounded-lg  overflow-hidden">
        <div className="flex-shrink-0">
        <Image className="w-full rounded-lg" width={200} height={100} objectFit="contain" layout="responsive"  quality={75}   src="/images/home5.png" alt=""/>        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline"> Infos </a>
            </p>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">Find the Best Products For the Best Prices</p>
              <p className="mt-3 text-base text-gray-500">Our one of a kind online community and team of skilled editors are obsessed with uncovering great products and every layer of savings. Users share, confirm, and comment on deals so that everyone benefits.</p>
            </a>
          </div>
          
        </div>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>></> */}
      <div data-aos="fade-right" className="flex flex-col rounded-lg  overflow-hidden">
        <div className="flex-shrink-0">
        <Image className="w-full rounded-lg" width={200} height={100} objectFit="contain" layout="responsive"  quality={75}   src="/images/home2.png" alt=""/>        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline"> Infos </a>
            </p>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">Become a Better Shopper Every Time You Search</p>
              <p className="mt-3 text-base text-gray-500">Whether you’re window shopping or looking for something specific, you’ll gather intel on the things you need and discover new product you’ll love. Along the way, you’ll receive invaluable wisdom on how to shop smarter and save more.</p>
            </a>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>

  
    </>
  );
}
