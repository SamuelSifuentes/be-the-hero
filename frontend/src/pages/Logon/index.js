import React, {useState} from 'react';
import api from '../../services/api';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import {Link , useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default  function Logon() {
  const [id, setId]= useState('');
const history = useHistory()
 async function handleLogin(e){

  
    e.preventDefault();
    try{
      const response = await api.post('sessions',{id});
      alert(`Bem vinda  ${response.data.name}`);
      localStorage.setItem('ongId',id);
      localStorage.setItem('ongName',response.data.name)

      history.push('/profile')
    }catch{
      alert('Ong não existe')
    }
    

  }
 
  return (
    <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                <input onChange={e => setId(e.target.value)} type="text" placeholder="Sua ID"/>

                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041" />Não teho cadastro
                    </Link>
            </form>

        </section>

        <img src={herosImg} alt="Heroes"/>
    </div>
  );
}