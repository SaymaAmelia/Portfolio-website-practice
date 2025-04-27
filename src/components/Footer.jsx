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
       <footer className='section'>
         <div className='container'>
          <div className='lg:grid lg:grid-cols-2'>

            <div className='mb-10'>
                <h2 className='heading-1 mb:8 lg:max-w-[12ch] '>
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

         </div>

       </footer>
     )
   }
   
   export default Footer