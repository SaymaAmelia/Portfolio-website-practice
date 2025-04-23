import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
const Navbar = ({ isMenuOpen }) => {
  const lastActiveLink = useRef(null); // Initializing the ref
  const activeBox = useRef(null); // Ref for the active box
  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'; // Set the top position of the active box
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'; // Set the left position of the active box 
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'; // Set the width of the active box
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'; // Set the height of the active box
  }; 
  useEffect(() => {
    const handleResize = () => initActiveBox();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
// !----------------------this fuction is not working properly------------------
  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active'); // Remove the active class from the last active link
    event.target.classList.add('active'); // Add the active class to the current link
    lastActiveLink.current = event.target; // Update the last active link

    activeBox.current.style.top = event.target.offsetTop + 'px'; // Set the top position of the active box to the current link
    activeBox.current.style.left = event.target.offsetLeft + 'px'; // Set the left position of the active box to the current link
    activeBox.current.style.width = event.target.offsetWidth + 'px'; // Set the width of the active box to the current link
    activeBox.current.style.height = event.target.offsetHeight + 'px'; // Set the height of the active box to the current link
  };
  
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
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}> 
      <ul className='md:flex gap-4 md:gap-8 items-center justify-center md:justify-end '>
        {navItems.map(({ label, link, className, ref }, key) => (
          <li key={key} >
            <a href={link}
            className={className} 
            ref={ref}
            onClick={activeCurrentLink}
            
            >
           {label}

            </a>
          </li>
        ))}
      </ul>
      <div className='active-box'
      ref={activeBox}></div>
    </nav>
  );
};
Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;

