import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { login }  from '../../../services/cuidador';
import './index.css';

const initialValues = {
    email: '',
    password: '',
}

const initialErrors = {}

const validationSchema = Yup.object({
    email: Yup.string().email().required('Digite seu email'),
    password: Yup.string().required('Digite sua senha'),
})


function SingInFuncionario() {
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const history = useHistory();

    const onSubmit = async (values) => {
        setIsLoading(true);
        try {
            const data = await login(values);
            if (data) {
                history.push('/cuidador');
            }
        } catch (error) {
            setShowError(true);
        } finally {
            setIsLoading(false);
        }
    }

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues,
        initialErrors,
        validationSchema,
        onSubmit    
    })
    
    return (
        <div>
            <div>
            <Link to='/sign-in' className="navbar-logo">
                <AiOutlineArrowLeft  className='left-arrow' />
            </Link>  
            </div>
            {showError && <p className="error">Credenciais Inválidas</p>}
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <p className="texto">E-mail:</p>
                    <input name="email" value={values.email} onChange={handleChange} type="text" placeholder='Digite seu e-mail' className={`input-email ${errors.email ? 'input-error' : ''}`} /> 
                </div>
                <div className="senha">
                    <p className="texto">Senha:</p>
                    <input name="password" value={values.password} onChange={handleChange} type="password" placeholder='Digite sua senha' className={`input-senha ${errors.password ? 'input-error' : ''}`}/>
                </div>
                <div className="cuidador-login">
                <input type="submit" value={isLoading ? 'Carregando...' : "Login"}  className="botao-user" disabled={isLoading} />
                </div>
            </form>
        </div>
    )
}

export default SingInFuncionario
