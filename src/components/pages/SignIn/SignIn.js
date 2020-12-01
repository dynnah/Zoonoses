import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './SignIn.css';

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
                    <p className="texto">Fazer Login como Funcionário</p>
                    <Link Link to='/funcionario-sign-in'>
                        <button className="login">Login</button>
                    </Link>   
                </div>
                <div className="flex-child">
                    <p className="texto">Fazer Login como Cuidador</p>
                    <Link Link to='/cuidador-sign-in'>
                        <button className="login">Login</button>
                    </Link>
                </div>
            </div>
        </div>    
    )
}

export default SignIn
