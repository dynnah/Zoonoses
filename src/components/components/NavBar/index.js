import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { SiDatadog } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button';
import './index.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false) 
    const [button, setButton] = useState(true);
    const [hasUser, setHasUser] = useState(false);
    const history = useHistory();

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
        const token = localStorage.getItem('token')
        if (token) {
            setHasUser(true);
        } else {
            setHasUser(false);
        }
        history.listen(() => {
            const token = localStorage.getItem('token')
            if (token) {
                setHasUser(true);
            } else {
                setHasUser(false);
            }
        })
    }, [history])

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setHasUser(false);
        history.push('/sign-in');

    }

    const _renderDesktopButton = () => {
        if (hasUser) {
            return <div className="btn-logout-link btn-logout--outline" onClick={handleLogout}>Logout</div>
        } else {
            return (
                <Link to='/sign-in' className="btn-link" >
                    <Button buttonStyle='btn--outline'>Login</Button>
                </Link>  
            )                   
        }
    }

    const _renderMobileButton = () => {
        if (hasUser) {
            return <div className="btn-logout-link btn-logout--outline" onClick={handleLogout}>Logout</div>
        } else {
            return (
                <Link to='/sign-in' className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                        Login
                    </Button>
                </Link> 
            )                   
        }
    }
    
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
                          {button ? _renderDesktopButton(): _renderMobileButton()}
                      </li>
                  </ul>
              </div>
          </div>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
