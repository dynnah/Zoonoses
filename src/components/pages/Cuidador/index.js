import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';


function Cuidador() {
    return (
        <div>
        <div className="welcome">
            <p className="welcome-title">Bem Vindo, Nome do Usuário </p>
        </div>
        <div className="infos-cuidador">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Animal</th>
                </tr>
                <tr>
                    <td>Nome do Funcionario</td>
                    <td>funcionario@gmail.com</td>
                    <td>Catinho</td>
                </tr>
            </table>
        </div>
        <div className="opcoes-cuidador">
            <Link Link to='/edit-cuidador'>
                <button className="opcoes">Editar Perfil</button>
            </Link>
            <Link Link to='/solicitar-cirurgia'>
                <button className="opcoes">Solicitar Cirurgia</button>
            </Link> 
        </div>
        
    </div>
    )
}

export default Cuidador
