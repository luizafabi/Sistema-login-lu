import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Cadastro() {
    const navigate = useNavigate()
  const [novoUsuario, setNovoUsuario] = useState({
    username:'',
    password:'',
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovoUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(novoUsuario.username == null && novoUsuario.password == null){
      alert("Campo vazio")
    }else{
      try {
        await axios.post('http://localhost:8090/api', novoUsuario);
        navigate('/')
      } catch (error) {
        console.error('Erro ao criar o Usuário:', error);
      } 
    }
    
  };

  return (
    <div className='tudo'>
      <h1>Cadastro</h1>
          <>
            <form onSubmit={handleSubmit}>
             <label>Digite o nome de usuário:</label>
              <input
                type="text"
                name="username"
                required
                value={novoUsuario.username}
                onChange={handleInputChange}
              />
              <br />
              <label>Digite uma senha:</label>
              <input
              required
                type="password"
                name="password"
                value={novoUsuario.password}
                onChange={handleInputChange}
              />
              <br />
              <button type="submit">Cadastrar</button>
            </form>
          </>
    </div >
  );

}
export{Cadastro}