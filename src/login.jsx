import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const logar = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
      username: username,
      password: password,
    });
    return response.data;
    
  } catch (error) {
    throw error;
  }
};
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await logar(username, password);
      if(response == true ){
        navigate('/home')
      }
      else{
        alert("Usuário ou Senha incorreto!");
      }
    } catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };

  return (
    <div className='tudo'>
      <h1>Login</h1>
      <form>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <a href="/cadastro">cadastro</a>
      </form>
    </div>
  );
}
export default Login;