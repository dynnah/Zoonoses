import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/pages/Footer/Footer'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Contact from './components/pages/Contact/Contact'
import FormSignUp from './components/pages/SignUp/FormSignUp'
import SignIn from './components/pages/SignIn/SignIn'
import SignInFuncionario from './components/pages/SignIn/SingInFuncionario'
import SignInCuidador from './components/pages/SignIn/SignInCuidador'
import Funcionario from './components/pages/Users/Funcionario'
import Cuidador from './components/pages/Users/Cuidador'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={FormSignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/funcionario-sign-in' component={SignInFuncionario} />
        <Route path='/funcionario' component={Funcionario} />
        <Route path='/cuidador-sign-in' component={SignInCuidador} />
        <Route path='/cuidador' component={Cuidador} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
