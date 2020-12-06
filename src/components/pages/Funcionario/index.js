import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';

function Funcionario() {
    return (
        <div className="funcionario">
            <div className="welcome">
                <p className="welcome-title">Bem Vindo, Nome do Usuário </p>

            </div>
            <div className="opcoes-funcionario">
                <Link Link to='/solicitacoes'>
                    <button className="opcoes">Listar Solicitações</button>
                </Link>
                <Link Link to='/cadastrar-cirurgia'>
                    <button className="opcoes">Cadastrar Cirurgia</button>
                </Link> 
            </div>
            <div className="space"/>
            
        </div>
    )
}

export default Funcionario
