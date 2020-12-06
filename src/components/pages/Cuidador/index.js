import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { getCuidador } from '../../../services/cuidador';

function Cuidador() {
    const [cuidador, setCuidador] = useState({
        nome: '',
        email: '',
        cpf: '',
    });

    useEffect(() => {
        (async () => {
            const data = await getCuidador();
            if (data) {
                setCuidador(data);
            }
        })();
    }, []);

    return (
        <div>
        <div className="welcome">
            <p className="welcome-title">Bem Vindo, {cuidador.nome} </p>
        </div>
        <div className="infos-cuidador">
            <table id="cuidador">
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Animal</th>
                </tr>
                <tr>
                    <td>{cuidador.nome}</td>
                    <td>{cuidador.email}</td>
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
