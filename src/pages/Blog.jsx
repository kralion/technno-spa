import styles2 from "./../styles/barracirculo.module.css";
import Carousel from "react-elastic-carousel";
import CardCarousel from "./CardCarousel";
import abourCircle from "./../assets/about-circle.png";
import Card01 from "./../assets/cards/card_01.png"
import Card02 from "./../assets/cards/card_02.png";
import Card03 from "./../assets/cards/card_03.jpg";
import Card04 from "./../assets/cards/card_04.jpg";
import Card05 from "./../assets/cards/card_05.jpg";
import Card06 from "./../assets/cards/card_06.jpg";
/* import Card01 from "../../public/img/cards/card_01.png"
import Card02 from "../../public/img/cards/card_02.png";
import Card03 from "../../public/img/cards/card_03.jpg";
import Card04 from "../../public/img/cards/card_04.jpg";
import Card05 from "../../public/img/cards/card_05.jpg";
import Card06 from "../../public/img/cards/card_06.jpg"; */
/* import Head from "next/head"; */

function Blog() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
  ];

  return (
    <>
      <head>
        <style>
          {`
            .rec.rec-arrow {
              opacity: 0;
              color: white;
              font-size: 15px;
              background-color: #0C5ADB !important;
            }

            .rec.rec-arrow:hover:enabled {
              background-color: #121B51 !important;
            }

            .rec.rec-arrow:hover:disabled {
              background-color: #121B51 !important;
            }

            .rec.rec-carousel:hover .rec.rec-arrow {
              opacity: 1;
            }

            .rec.rec-dot:hover{
              box-shadow: none;
            }

            .rec.rec-dot_active{
              background-color: #0C5ADB !important;
              height: 3px;
              width: 40px !important;
              border-radius: 10px;
              box-shadow: none;
            }

            .rec.rec-dot_active:focus{
              background-color: #0C5ADB;
              height: 3px;
              width: 40px;
              border-radius: 10px;
              box-shadow: none;
            }

            .rec.rec-dot{
              background-color: #bfcadc;
              height: 3px;
              width: 20px;
              border-radius: 10px;
              box-shadow: none;
            }

            `}
        </style>
      </head>
      <section
        className="pt-[75px] pb-[120px] max-w-[1170px] w-full m-auto "
        id="blog"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 w-full p-[10px]">
          <div className="mb-5 justify-start">
            <h4 className="text-[#0c5adb] uppercase text-base tracking-[0.5rem] ">
              LATEST ARTICLE
            </h4>
            <h3 className="text-texto-uno text-4xl font-black max-[750px]:text-[22px] transition-[.5s] duration-500 leading-3  pt-5 md:pt-0 md:leading-10">
              See Our Latest
            </h3>
            <h3 className="text-texto-uno text-4xl font-black max-[750px]:text-[22px] transition-[.5s] duration-500">
              Blog Posts
            </h3>
            <div className="mt-4 mb-8">
              <div className="w-[90px] h-[5px] bg-[#aec6ef] rounded-full relative flex items-center ">
                 <div
                  className={`w-2.5 h-2.5 bg-[#0c5adb] rounded-full -left-[5px] absolute ${styles2.animate_circle}`}
                ></div> 
              </div>
            </div>
          </div>
          <div className=" flex md:justify-end justify-start">
            <button className=" h-[45px] bg-[#0C5ADB] hover:bg-[#00247E] text-center text-white py-[12px] px-[30px] rounded-[7px] transition ease-in-out duration-300 cursor-pointer my-auto">
              See All Blogs
            </button>
          </div>
        </div>
        <div className="w-full p-[10px]">
          <Carousel itemsToShow={1} breakPoints={breakPoints}>
            <CardCarousel
              tipo={"TECHNOLOGY"}
              imagen={Card01}
              autor={"Techno"}
              fecha={"Abril 9, 2023"}
              titulo={"Business Strategy Plan 2022 From the USA"}
              detalles={
                "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet "
              }
            />
            <CardCarousel
              tipo={"TECHNOLOGY"}
              imagen={Card02}
              autor={"Techno"}
              fecha={"Abril 9, 2023"}
              titulo={"The Most 10 Chrome Extention Download Strategy"}
              detalles={
                "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet "
              }
            />
            <CardCarousel
              tipo={"WORDPRESS"}
              imagen={Card03}
              autor={"Techno"}
              fecha={"October 22, 2020"}
              titulo={"TikTok Illegacy collecting data sharing"}
              detalles={
                "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet "
              }
            />
            <CardCarousel
              tipo={"DEVELOPMENT"}
              imagen={Card04}
              autor={"Techno"}
              fecha={"October 22, 2020"}
              titulo={"How can use our latest news by techno"}
              detalles={
                "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet "
              }
            />
            <CardCarousel
              tipo={"WORDPRESS"}
              imagen={Card05}
              autor={"Techno"}
              fecha={"October 22, 2020"}
              titulo={"Convincing reasons you need to learn"}
              detalles={
                "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet "
              }
            />
            <CardCarousel
              tipo={"WORDPRESS"}
              imagen={Card06}
              autor={"Techno"}
              fecha={"October 22, 2020"}
              titulo={"The five devices you need to work anytime"}
              detalles={
                "Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet "
              }
            />
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Blog;
