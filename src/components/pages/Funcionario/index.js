import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { getFuncionario } from '../../../services/funcionario';

function Funcionario() {
    const [funcionario, setFuncionario] = useState({
        nome: '',
    });

    useEffect(() => {
        (async () => {
            const data = await getFuncionario();
            if (data) {
                setFuncionario(data);
            }
        })();
    }, []);

    return (
        <div className="funcionario">
            <div className="welcome">
                <p className="welcome-title">Bem Vindo, {funcionario.nome} </p>

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
