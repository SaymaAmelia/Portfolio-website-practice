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
            <div>
                <h2 className='heading-1'>
                Let&apos;s work together today!
                </h2>
                <ButtonPrimary
                 href="mailto:saymaamelia@gmail.com"
                   label="start project"
                   icon="chevron_right"/>
            </div>

         </div>

       </footer>
     )
   }
   
   export default Footer