import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import './index.css';
import { createCuidador } from '../../../services/cuidador';

const initialValues = {
  cpf: '',
  telefone: '',
  name: '',
  datanasc: '',
  sexo: '',
  email: '',
  password: '',
  password_confirmation: '',
  pet_name: '',
  pet_sexo: '',
  pet_raca: '',
  pet_idade: '',
  pet_peso: '',
}

const initialErrors = {}

 const validationSchema = Yup.object({
   cpf: Yup.string().required('CPF é um campo obrigatório'),
   telefone: Yup.string().required('Telefone é um campo obrigatório'),
   name: Yup.string().required('Nome é um campo obrigatório'),
   datanasc: Yup.string().required('Nome é um campo obrigatório'),
   sexo: Yup.string().required('Nome é um campo obrigatório'),
   email: Yup.string().email().required('E-mail é um campo obrigatório'),
   password: Yup.string().required('Senha é um campo obrigatório'),
   password_confirmation: Yup.string().oneOf([Yup.ref('password'), undefined], 'As senhas precisam ser iguais').required('Senha é um campo obrigatório'),
   pet_name: Yup.string().required('Nome do pet é um campo obrigatório'),
   pet_raca: Yup.string().required('Raça do pet é um campo obrigatório'),
   pet_sexo: Yup.string().required('Sexo do pet é um campo obrigatório'),
   pet_idade: Yup.string().required('Idade do pet é um campo obrigatório'),
   pet_peso: Yup.string().required('Peso do pet é um campo obrigatório'),
 })


function FormSignUp() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (values) => {
    setIsLoading(true)
    try {
      const { cpf, name, sexo, telefone, datanasc, email, password, password_confirmation, pet_name, pet_raca, pet_sexo, pet_idade, pet_peso } = values
      const newCuidador = {
        cpf,
        nome: name,
        sexo,
        telefone,
        datanasc,
        email,
        password,
        password_confirmation,
        animal_attributes: {
          nome: pet_name,
          raca: pet_raca,
          sexo: pet_sexo,
          idade: pet_idade,
          peso: pet_peso,
        }
      }
      const data = await createCuidador(newCuidador);
      if (data) {
        const { nome } = data;
        buttonAlert('Cadastro finalizado com sucesso!', `${nome}, entraremos em contato.`, 'success');
        resetForm(initialValues);
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

  const { values, errors, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues,
    initialErrors,
    validationSchema,
    validateOnChange: false,
    onSubmit
  })

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
          <p>Senha:</p>
            <input name="password" type="password" placeholder='Digite sua senha' value={values.password} onChange={handleChange} className={errors.password ? 'input-error' : ''} />
          <p>Confirme sua Senha:</p>
            <input name="password_confirmation" type="password" placeholder='Digite sua senha novamente' value={values.password_confirmation} onChange={handleChange} className={errors.password_confirmation ? 'input-error' : ''} />
        </div>
        <div className="dados-pet">
          <hr id="barra"/>
          <h1>2. Dados Cadastrais do Pet</h1>
          <p>Nome do Pet:</p>
            <input name="pet_name" placeholder='Digite o nome do seu pet' value={values.pet_name} onChange={handleChange} className={errors.pet_name ? 'input-error' : ''} />
          <p>Sexo do Pet:</p>
            <input name="pet_sexo" placeholder='' value={values.pet_sexo} onChange={handleChange} className={errors.pet_sexo ? 'input-error' : ''}/>
          <p>Raça do Pet:</p>
            <input name="pet_raca" placeholder='' value={values.pet_raca} onChange={handleChange} className={errors.pet_raca ? 'input-error' : ''} />
          <p>Idade do Pet:</p>
            <input name="pet_idade" placeholder='' value={values.pet_idade} onChange={handleChange} className={errors.pet_idade ? 'input-error' : ''} />
          <p>Peso do Pet:</p>
            <input name="pet_peso" placeholder='' value={values.pet_peso} onChange={handleChange} className={errors.pet_peso ? 'input-error' : ''} />
        </div>
        <input type="submit" value={isLoading ? 'Carregando...' : "Finalizar cadastro"}  className="btn-submit" disabled={isLoading} />
      </form>
    </div>
  )
}

export default FormSignUp
