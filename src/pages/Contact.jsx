import React from 'react'
import abourCircle from "./../assets/about-circle.png";
import "../styles/style.css";
import styles from "./../styles/Animation.module.css";

function Contact() {
  return (
    <div>
       <div class="bg-blue-700 relative">
          <div class="container mx-auto p-8 pl-40 pr-40 pt-40">
            <h3 class="text-white text-3xl mb-4 text-center">GET QUOTE</h3>
            <h1 class="text-white text-5xl mb-4 text-center">Make An</h1>
            <h1 class="text-white text-5xl mb-8 text-center">Free Consultant</h1>
            <div className="mt-[18px] mb-[35px] ">
          <div className="h-[5px] w-[90px] bg-[#aec6ef] my-[20px] mx-auto relative rounded-[30px]">
            <div className={styles.circle}></div>
          </div>
        </div>

          <div class="flex mb-4">
            <div class="w-1/2 pr-5">
              <input id="name" type="text" class="w-full bg-blue-400 p-4 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Name"/>
            </div>
            <div class="w-1/2 pl-5">
              <input id="email" type="email" class="w-full bg-blue-400 p-4 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Email"/>
            </div>
          </div>
          
          <div class="flex mb-4">
            <div class="w-1/2 pr-5">
              <input id="phone" type="tel" class="w-full bg-blue-400 p-4 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Phone"/>
            </div>
            <div class="w-1/2 pl-5">
              <input id="website" type="text" class="w-full bg-blue-400 p-4 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Website"/>
            </div>
          </div>
          
          <textarea id="message" class="w-full h-32 bg-blue-400 p-2 text-blue-900 rounded-md placeholder-white focus:bg-blue-200 outline-none" placeholder="Your message"></textarea>
          <button class="bg-white text-black pl-10 pr-10 pt-4 pb-4 mt-4 mx-auto block hover:bg-blue-900 hover:text-white rounded">Free Consultancy</button>
        </div>
        
        <div class="absolute top-10 right-5 circle">
          <div class="absolute top-0 right-0 h-72 w-72 bg-transparent rounded-full">
            {/* <img src={abourCircle}  alt="about-circle" class="bluecircle animate-bump duration-150 invisible lg:visible" /> */}
            <img className={styles.imageCircle} src={abourCircle} alt="circle" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact