import React from 'react'
import { GoDotFill } from "react-icons/go";
import {ButtonOutline, ButtonPrimary} from './Button'
import 'material-symbols';

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36  lg:mb-0'>
       <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
        <div>
            <div className='flex  items-center gap-3'>
                <figure className='img-box w-10 h-10 rounded-lg overflow-hidden'>
                <img src="/images/avatar-1.jpg"  width={40} height={40} className='img-cover' alt="min.jpg" />
                </figure>
                <div className='flex items-center gap-1'>
                    <span className="">
                        <span className='text-green-800'>
                        <GoDotFill />
                        </span>
                    </span>
                    Available for work
                </div>
            </div>
            <h2 className='heading-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-15 mt-5 mb-8 lg:mb-10 ' >
                Hi, I’m <span className='text-green-800'>Hanry Clark</span>
            Building Scalable Modern Websites for the Future
            </h2>
           
           <div className=" flex  gap-3 items-center">
            <ButtonPrimary  label="Download CV"  icon="download" />
            <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
           </div>
        </div>
        <div className='hidden lg:block '>
            <figure className='img-box w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
            <img src="/images/hero-banner.png" width={656} height={800} className='w-full' alt="Hanry Clark" />
            </figure>
        </div>
       </div>
    </section>
  )
}

export default Hero