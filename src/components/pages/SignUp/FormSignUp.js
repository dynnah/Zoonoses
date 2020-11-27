import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import './Form.css';

const initialValues = {
  cpf: '',
  rg: '',
  name: '',
  datanasc: '',
  sexo: '',
  email: '',
  username: '',
  endereco: '',
  password: '',
  pet_name: '',
  pet_sexo: '',
  pet_raca: '',
  pet_idade: '',
  pet_peso: '',
}

const initialErrors = {}

 const validationSchema = Yup.object({
   cpf : Yup.string().required('CPF é um campo obrigatório'),
   rg: Yup.string().required('RG é um campo obrigatório'),
   name: Yup.string().required('Nome é um campo obrigatório'),
   datanasc: Yup.string().required('Nome é um campo obrigatório'),
   sexo: Yup.string().required('Nome é um campo obrigatório'),
   email: Yup.string().email().required('E-mail é um campo obrigatório'),
   username: Yup.string().required('Nome de usuário é um campo obrigatório'),
   endereco: Yup.string().required('Endereço é um campo obrigatório'),
   password: Yup.string().required('Senha é um campo obrigatório'),
   pet_name: Yup.string().required('Nome do pet é um campo obrigatório'),
   pet_raca: Yup.string().required('Raça do pet é um campo obrigatório'),
   pet_idade: Yup.string().required('Idade do pet é um campo obrigatório'),
   pet_peso: Yup.string().required('Peso do pet é um campo obrigatório'),
 })

//const validationSchema = Yup.object({
//  cpf : Yup.string(),
//  rg: Yup.string(),
//  name: Yup.string(),
//  datanasc: Yup.date(),
//  sexo: Yup.string(),
//  email: Yup.string().email(),
//  username: Yup.string(),
//  endereco: Yup.string(),
//  password: Yup.string(),
//  pet_name: Yup.string(),
//  pet_raca: Yup.string(),
//  pet_idade: Yup.string(),
//  pet_peso: Yup.string(),
//})



function FormSignUp() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (values) => {
    setIsLoading(true)
    try {
      console.log(values)
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('Resolvendo a promise'), 3000)
      })
      if (response) {
        buttonAlert('Cadastro finalizado com sucesso!', 'Entraremos em contato', 'success')
      }
    } catch (error) {
      buttonAlert('Algo deu errado', error.message, 'warning')
    } finally {
      setIsLoading(false)
    }
  }

  const buttonAlert = (title, message, status) => {
    swal(title, message, status);
  }

  const { values, errors, handleSubmit, handleChange,  } = useFormik({
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
          <p>CPF:</p>
            <input name="cpf" placeholder='000.000.000-00' value={values.cpf} onChange={handleChange} className={errors.cpf ? 'input-error' : ''} />
          <p>RG:</p>
            <input name="rg" placeholder='0.000.000' value={values.rg} onChange={handleChange} className={errors.rg ? 'input-error' : ''} />
          <p>Data de Nascimento:</p>
            <input name="datanasc" placeholder='00/00/0000' value={values.datanasc} onChange={handleChange} className={errors.datanasc ? 'input-error' : ''} />
          <p>Sexo:</p>
            <input name="sexo" placeholder='' value={values.sexo} onChange={handleChange} className={errors.sexo ? 'input-error' : ''} />
          <p>Endereço:</p>
            <input name="endereco" placeholder='' value={values.endereco} onChange={handleChange} className={errors.endereco ? 'input-error' : ''} />
          <p>Usuário:</p>
            <input name="username" placeholder='Digite seu nome de usuário' value={values.username} onChange={handleChange} className={errors.username ? 'input-error' : ''} />
          <p>Senha:</p>
            <input name="password" type="password" placeholder='Digite sua senha' value={values.password} onChange={handleChange} className={errors.password ? 'input-error' : ''} />
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
