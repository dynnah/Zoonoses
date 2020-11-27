import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const initialValues = {
  cpf: '',
  rg: '',
  name: '',
  datanas: '',
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
  datanasc: Yup.date(),
  sexo: Yup.string(),
  email: Yup.string().email().required('E-mail é um campo obrigatório'),
  username: Yup.string(),
  endereco: Yup.string().required('Endereço é um campo obrigatório'),
  password: Yup.string().required('Senha é um campo obrigatório'),
  pet_name: Yup.string().required('Nome do pet é um campo obrigatório'),
  pet_raca: Yup.string().required('Raça do pet é um campo obrigatório'),
  pet_idade: Yup.string().required('Idade do pet é um campo obrigatório'),
  pet_peso: Yup.string().required('Peso do pet é um campo obrigatório'),
})

function FormSignUp() {

  const onSubmit = (values) => {
    console.log(values)
  }

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues,
    initialErrors,
    validationSchema,
    onSubmit
  })

  return (
    <div>
      <div className="dados-cuidador">
      <h1>1. Dados Cadastrais</h1>
      <p>Nome:</p>
      <input name="name" placeholder='Digite seu nome' value={values.name} onChange={handleChange} error={errors.name} className="long-input"/>
      <p>E-mail:</p>
      <input name="email" placeholder='exemplo@exemplo.com' value={values.email} onChange={handleChange} error={errors.email} className="long-input"/>
      <p>CPF:</p>
      <input name="cpf" placeholder='000.000.000-00' value={values.cpf} onChange={handleChange} error={errors.cpf} />
      <p>RG:</p>
      <input name="rg" placeholder='0.000.000' value={values.rg} onChange={handleChange} error={errors.rg} />
      <p>Data de Nascimento:</p>
      <input name="datanasc" placeholder='00/00/0000' value={values.datanasc} onChange={handleChange} error={errors.datanasc} />
      <p>Sexo:</p>
      <input name="sexo" placeholder='' value={values.sexo} onChange={handleChange} error={errors.sexo} />
      <p>Usuário:</p>
      <input name="username" placeholder='Digite seu nome de usuário' value={values.username} onChange={handleChange} error={errors.username} />
      <p>Senha:</p>
      <input name="password" placeholder='Digite sua senha' value={values.password} onChange={handleChange} error={errors.password} />
      </div>

      <div className="dados-pet">
      <hr id="barra"/>
      <h1>2. Dados Cadastrais do Pet</h1>
      <p>Nome do Pet:</p>
      <input name="pet_name" placeholder='Digite o nome do seu pet' value={values.pet_name} onChange={handleChange} error={errors.pet_name} />
      <p>Sexo do Pet:</p>
      <input name="pet_sexo" placeholder='' value={values.pet_sexo} onChange={handleChange} error={errors.pet_sexo} />
      <p>Raça do Pet:</p>
      <input name="pet_raca" placeholder='' value={values.pet_raca} onChange={handleChange} error={errors.pet_raca} />
      <p>Idade do Pet:</p>
      <input name="pet_idade" placeholder='' value={values.pet_idade} onChange={handleChange} error={errors.pet_idade} />
      <p>Peso do Pet:</p>
      <input name="pet_peso" placeholder='' value={values.pet_peso} onChange={handleChange} error={errors.pet_peso} />
      </div>
      
      <div className="button">
      <button type="submit" className="btn-submit">Finalizar Cadastro</button>
      </div>

    </div>
  )
}

export default FormSignUp
