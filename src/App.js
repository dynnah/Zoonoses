import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/components/NavBar'
import Footer from './components/components/Footer'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import FormSignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import SignInFuncionario from './components/pages/SingInFuncionario'
import SignInCuidador from './components/pages/SingInCuidador'
import Funcionario from './components/pages/Funcionario'
import Cuidador from './components/pages/Cuidador'
import EditarCuidador from './components/pages/EditarCuidador'
import PrivateRoute from './components/components/PrivateRoute'

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
        <Route path='/cuidador-sign-in' component={SignInCuidador} />
        <PrivateRoute path="/funcionario" component={Funcionario} handler="funcionario_id" />
        <PrivateRoute path="/cuidador" component={Cuidador} handler="cuidador_id" />
        <PrivateRoute path="/edit-cuidador" component={EditarCuidador} handler="cuidador_id" />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
