import React from 'react'
import { ButtonPrimary } from './Button'
const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/codewithsadee'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
  ];

 
   
   const Footer = () => {
     return (
       <footer className='section mb-10'>
         <div className='container'>
          <div className='lg:grid lg:grid-cols-2'>

            <div className=' mb-8 lg:mb-10'>
                <h2 className='heading-1 mb-8 lg:mb-10 lg:max-w-[12ch] '>
                     Let&apos;s work together today!
                </h2>
                <ButtonPrimary
                 href="mailto:saymaamelia@gmail.com"
                   label="start project"
                   icon="chevron_right"/>
            </div>

            <div className='grid grid-cols-2 gap-4 lg:pl-20'>

              <div className=''>
                <p className='mb-2'>sitemap</p>
                <ul>
                  {sitemap.map(({label, href}, key)=>(
                    <li key={key}>
                      <a href={href}
                      className='block text-sm text-zinc-400 py-1 hover:text-zinc-200 transition-colors duration-300'>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className='mb-2'>socials</p>
                <ul>
                  {socials.map(({label, href}, key)=>(
                    <li key={key}>
                      <a href={href}
                      className='block text-sm text-zinc-400 py-1 hover:text-zinc-200 transition-colors duration-300'>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              
            </div>

          </div>

          <div className='flex items-center justify-between pt-10mb-8'>
          <a href=" ">
            <img src="/images/logo.svg" width={40} height={40} alt="logo.svg" />
          </a>
          <p className='text-zinc-500 text-sm'>
            &copy; 2025 <span className='text-zinc-200'>hanryClark</span>
          </p>

         </div>

         </div>
       

       </footer>
     )
   }
   
   export default Footer