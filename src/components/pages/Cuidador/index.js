import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { getCuidador } from '../../../services/cuidador';

function Cuidador() {
    const [cuidador, setCuidador] = useState({
        nome: '',
        email: '',
        cpf: '',
        animal: {
            nome: '',
        },
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
              <tbody>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Animal</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                    <td>{cuidador.nome}</td>
                    <td>{cuidador.email}</td>
                    <td>{cuidador.animal.nome}</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="opcoes-cuidador">
            <Link to='/edit-cuidador'>
                <button className="opcoes">Editar Perfil</button>
            </Link>
            <Link to='/solicitar-cirurgia'>
                <button className="opcoes">Solicitar Cirurgia</button>
            </Link> 
        </div>
        
    </div>
    )
}

export default Cuidador
