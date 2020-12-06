import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './index.css';

function SignIn() {
    return (
        <div>
            <div>
                <div>
                <Link to='/' className="navbar-logo">
                    <AiOutlineArrowLeft  className='left-arrow' />
                </Link>  
                </div> 
            </div>
            <div className="flex-container">
                <div className="flex-child">
                    <p className="texto-login">Fazer Login como Funcionário</p>
                        <div className="div-user">
                        <Link Link to='/funcionario-sign-in'>
                        <button className="login">Login</button>
                        </Link> 
                        </div>  
                </div>
                <div className="flex-child">
                    <p className="texto-login">Fazer Login como Cuidador</p>
                    <div className="div-user">
                        <Link Link to='/cuidador-sign-in'>
                        <button className="login">Login</button>
                        </Link> 
                    </div>  
                </div>
            </div>
        </div>    
    )
}

export default SignIn
