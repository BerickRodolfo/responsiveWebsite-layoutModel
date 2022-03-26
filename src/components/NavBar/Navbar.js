import React, { useState, useEffect } from 'react';
import { Nav, NavBarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, 
        NavItem, NavLinks, NavItemButton, NavBtnLink } from './styles';
import {FaTimes, FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles'
 
const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function showButton(){
      if(window.innerWidth <= 960){
        setButton(false);
      }
      else{
        setButton(true);
      }

  }
 
  useEffect(() =>{
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  function handleClick(){
    setClick(!click)
  }

  function closeMobileMenu(){
    setClick(false);
  }

  return (
    <>
      <IconContext.Provider value={{color: '#FFF'}}>
        <Nav> 
          <NavBarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              VEX
            </NavLogo>
            <MobileIcon 
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onclick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>Products</NavLinks>
              </NavItem>
              <NavItemButton onClick={closeMobileMenu}>
                {button ? (
                  <NavBtnLink to="/sign-up" >
                    <Button primary> Sign-Up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button  fontbig primary>Sign-Up</Button>
                  </NavBtnLink>
                )}
              </NavItemButton>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar