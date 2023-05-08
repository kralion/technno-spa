import React from 'react'
import abourCircle from "./../assets/about-circle.png";
import "../styles/style.css";
import styles from "./../styles/Animation.module.css";

function Contact() {
  return (
    <div>
       <div className="bg-blue-700 relative">
          <div className="container mx-auto p-8 lg:pl-40 lg:pr-40 lg:pt-40">
            <h3 className="text-white text-3xl mb-4 text-center">GET QUOTE</h3>
            <h1 className="text-white text-5xl mb-4 text-center">Make An</h1>
            <h1 className="text-white text-5xl mb-8 text-center">Free Consultant</h1>
            <div className="mt-[18px] mb-[35px] ">
          <div className=" h-[5px] w-[90px] bg-[#aec6ef] my-[20px] mx-auto relative rounded-[30px]">
            <div className={styles.circle}></div>
          </div>
        </div>

          <div className="flex mb-4 gap-3 lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full lg:pr-5">
              <input id="name" type="text" className="w-full bg-blue-400 p-4 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Name"/>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-5">
              <input id="email" type="email" className="w-full bg-blue-400 p-4 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Email"/>
            </div>
          </div>
          
          <div className="flex mb-4 gap-3 lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full lg:pr-5">
              <input id="phone" type="tel" className="w-full bg-blue-400 p-4 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Phone"/>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-5">
              <input id="website" type="text" className="w-full bg-blue-400 p-4 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Website"/>
            </div>
          </div>
          
          <textarea id="message" className="w-full h-32 bg-blue-400 p-2 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Your message"></textarea>
          <button className="bg-white text-black pl-10 pr-10 pt-4 pb-4 mt-4 mx-auto block hover:bg-blue-900 hover:text-white rounded">Free Consultancy</button>
        </div>
        
        <div className="invisible lg:visible absolute top-10 right-5 circle">
          <div className="absolute top-0 right-0 h-72 w-72 bg-transparent rounded-full">
            {/* <img src={abourCircle}  alt="about-circle" className="bluecircle animate-bump duration-150 invisible lg:visible" /> */}
            <img className={styles.imageCircle} src={abourCircle} alt="circle" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact