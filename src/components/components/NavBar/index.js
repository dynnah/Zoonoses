import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { SiDatadog } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button';
import './index.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false) 
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <div className="navbar">
              <div className="navbar-container container">
                  <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                      <SiDatadog className='navbar-icon' />
                       Centro Zoonoses
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}  
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                      </li>
                      <li>
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            Serviços
                        </Link>
                      </li>
                      <li>
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            Contato
                        </Link>
                      </li>
                      <li className="nav-btn">
                          {button ? (
                              <Link to='/sign-in' className="btn-link" >
                                  <Button buttonStyle='btn--outline'>Login</Button>
                              </Link>  
                          ): (
                             <Link to='/sign-in' className="btn-link" onClick={closeMobileMenu}>
                                 <Button buttonStyle='btn--outline'
                                 buttonSize='btn--mobile'>
                                     Login</Button>
                             </Link> 
                          )}
                      </li>
                  </ul>
              </div>
          </div>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
