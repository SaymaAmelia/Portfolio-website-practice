
import React, { useEffect } from 'react'
import { useRef } from 'react';
import PropTypes from 'prop-types';



const Navbar = ({navOpen}) => {
  const lastActiveLink = useRef()
  const activeBox = useRef(null); // Ref for the active box

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'; // Set the top position of the active box
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'; // Set the left position of the active box 
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'; // Set the width of the active box
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'; // Set the height of the active box
  }
  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox); // Add event listener to update the active box position on resize

  const activeCurrentLink = (event) => {

    lastActiveLink.current?.classList.remove('active'); // Remove the active class from the last active link
    event.target.classList.add('active'); // Add the active class to the current link
    lastActiveLink.current = event.target; // Update the last active link

    activeBox.current.style.top = event.target.offsetTop + 'px'; // Set the top position of the active box to the current link
    activeBox.current.style.left = event.target.offsetLeft + 'px'; // Set the left position of the active box to the current link
    activeBox.current.style.width = event.target.offsetWidth + 'px'; // Set the width of the active box to the current link
    activeBox.current.style.height = event.target.offsetHeight + 'px'; // Set the height of the active box to the current link
  }

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];

  return (
   <nav className={'navbar' + (navOpen ? ' active' : '')}>
     {
      navItems.map(({label, link, className, ref}, key)=>
      (
        
          <a href={link}
          key={key}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
          >
            {label}
          </a>
         
      )
    ) 
     
     }
     <div className="active-box"
     ref={activeBox}>

     </div>

    
   </nav>
  )
}
Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar