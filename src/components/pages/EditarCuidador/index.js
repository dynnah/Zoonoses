import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import './index.css';
import { getCuidador, updateCuidador } from '../../../services/cuidador';

const initialValues = {
  cpf: '',
  telefone: '',
  name: '',
  datanasc: '',
  sexo: '',
  email: '',
}

const initialErrors = {}

 const validationSchema = Yup.object({
   cpf: Yup.string().required('CPF é um campo obrigatório'),
   telefone: Yup.string().required('Telefone é um campo obrigatório'),
   name: Yup.string().required('Nome é um campo obrigatório'),
   datanasc: Yup.string().required('Nome é um campo obrigatório'),
   sexo: Yup.string().required('Nome é um campo obrigatório'),
   email: Yup.string().email().required('E-mail é um campo obrigatório'),
 })


function FormSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  
  const onSubmit = async (values) => {
    setIsLoading(true)
    try {
      const { cpf, name, sexo, telefone, datanasc, email } = values
      const newCuidador = {
        cpf,
        nome: name,
        sexo,
        telefone,
        datanasc,
        email,
      }
      const data = await updateCuidador(newCuidador);
      if (data) {
        const { nome } = data;
        history.push('/cuidador');
      }
    } catch (error) {
      buttonAlert('Algo deu errado', error.message, 'warning');
    } finally {
      setIsLoading(false);
    }
  }
  
  const buttonAlert = (title, message, status) => {
    swal(title, message, status);
  }
  
  const { values, errors, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues,
    initialErrors,
    validationSchema,
    validateOnChange: false,
    onSubmit
  })
  
  useEffect(() => {
    (async () => {
        const data = await getCuidador();
        if (data) {
            const { nome, cpf, email, datanasc, sexo, telefone } = data;
            console.log(telefone);
            setFieldValue('name', nome);
            setFieldValue('cpf', cpf);
            setFieldValue('email', email);
            setFieldValue('datanasc', datanasc);
            setFieldValue('sexo', sexo);
            setFieldValue('telefone', telefone);
        }
    })();
  }, [setFieldValue]);
  
  return (
    <div>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="dados-cuidador">
          <h1>1. Dados Cadastrais</h1>
          <p>Nome:</p>
            <input type="text" name="name" placeholder='Digite seu nome' value={values.name} onChange={handleChange} className={`long-input ${errors.name ? 'input-error' : ''}`}/>
          <p>E-mail:</p>
            <input name="email" placeholder='exemplo@exemplo.com' value={values.email} onChange={handleChange} className={`long-input ${errors.email ? 'input-error' : ''}`}/>
          <p>Telefone:</p>
            <input name="telefone" placeholder='00 00000-0000' value={values.telefone} onChange={handleChange} className={errors.telefone ? 'input-error' : ''} />
          <p>CPF:</p>
            <input name="cpf" placeholder='000.000.000-00' value={values.cpf} onChange={handleChange} className={errors.cpf ? 'input-error' : ''} />
          <p>Data de Nascimento:</p>
            <input name="datanasc" placeholder='00/00/0000' value={values.datanasc} onChange={handleChange} className={errors.datanasc ? 'input-error' : ''} />
          <p>Sexo:</p>
            <input name="sexo" placeholder='' value={values.sexo} onChange={handleChange} className={errors.sexo ? 'input-error' : ''} />
        </div>
        <input type="submit" value={isLoading ? 'Carregando...' : "Atualizar cadastro"}  className="btn-submit" disabled={isLoading} />
      </form>
    </div>
  )
}

export default FormSignUp
