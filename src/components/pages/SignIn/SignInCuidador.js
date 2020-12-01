import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './OtherSignIn.css';

function SingInFuncionario() {
    return (
        <div>
            <div>
            <Link to='/sign-in' className="navbar-logo">
                <AiOutlineArrowLeft  className='left-arrow' />
            </Link>  
            </div>
            <div className="email">
                <p className="texto">E-mail:</p>
                <input className="input-email" type="text" placeholder='Digite seu e-mail' /> 
            </div>
            <div className="senha">
                <p className="texto">Senha:</p>
                <input className="input-senha" type="password" placeholder='Digite sua senha' />
            </div>
            <div className="cuidador-login">
            <Link Link to='/cuidador'>
              <button className="botao-user">Login</button>
            </Link>
            </div>
            
        </div>
    )
}

export default SingInFuncionario
