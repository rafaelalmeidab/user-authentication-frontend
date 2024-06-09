import { useState } from 'react';
import brazil from './assets/brazil.png'
import './styles.css'
import axios from "axios";

const baseURL = 'http://localhost:4000/login';

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
   <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        {/* <form className="login-form"> */}
          <span className="login-form-title">
            Welcome!
          </span>
          <span className="login-form-title">
            <img src={brazil} alt="Brazil" />
          </span>
          <div className="wrap-input">
            <input 
              className={user !== "" ? 'has-value input' : 'input'} 
              type="user"
              value={user}
              onChange={e => setUser(e.target.value)} 
            />
            <span className="focus-input" data-placeholder="User">

            </span>
          </div>
          <div className="wrap-input">
          <input 
              className={password !== "" ? 'has-value input' : 'input'} 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)} 
            />
            <span className="focus-input" data-placeholder="Password">

            </span>
          </div>
          <div className="container-login-form-btn">
            <button onClick={executeLogin} className="login-form-btn">
              Login
            </button>
          </div>
          <div className="text-center">
            <span className="txt1">Don't have an account?</span>
            <a className="txt2" href="#">Create here.</a>
          </div>
        {/* </form> */}
      </div>
    </div>
   </div>
  );

  
  async function executeLogin(){
    try{
      axios.post(baseURL, {
        user : user,
        password: password
      })
      .then(response =>{
        alert("Alerta usuário logado!");
      })
      .catch(e => {
        console.log(e);
        alert(e.response.data.message); 
      })
    }
    catch(err){
      console.log(err);
    }
  }
}

export default App;