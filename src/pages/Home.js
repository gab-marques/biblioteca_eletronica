import './Home.css'
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import api from '../api'


function Home(){
    const [filme, setUser] = useState();
useEffect(() => {
  api
    .get("/api/filmes")
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);
    return(
        <div className="Home">
            <header className="Home-header">
        </header>
             <div class="toolbar" role="banner">
         <ul>
            <li> <Link to="/"> Home</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li> 
        </ul>
        </div>
        <div class="tres">
        <h2>Últimos Lançamentos</h2>
          <div class="card-container">
            <div >
              <a class="card">
                  <figure>
                  <img src= {filme?.result[4].imagem} className="imagem" alt="logo" width="150" height="100" />
                  <h3>{filme?.result[4].titulo}</h3>
                 
                  
                  </figure>      
               </a>
            </div> 
            <div>
              <a class="card">
                  <figure>
                  <img src={filme?.result[2].imagem}  className="imagem" alt="logo" width="150" height="100" />
                  <h3>{filme?.result[2].titulo}</h3>
                  </figure>      
               </a>
            </div> 
            <div>
              <a class="card">
                  <figure>
                  <img src={filme?.result[3].imagem} className="imagem" alt="logo" width="150" height="100" />
                  <h3>{filme?.result[3].titulo}</h3>
                  </figure>      
               </a>
            </div> 
          </div>
          
      </div>
      <div class="card-container">
            <div>
              <a class="card">
                  <figure>
                  <img src={''} className="imagem" alt="logo" width="150" height="100" />
                  <h3>Titulo</h3>
                  </figure>      
               </a>
            </div>
            <div>
              <a class="card">
                  <figure>
                  <img src={''} className="imagem" alt="logo" width="150" height="100" />
                  <h3>Titulo</h3>
                  </figure>      
               </a>
            </div>
            <div>
              <a class="card">
                  <figure>
                  <img src={''} className="imagem" alt="logo" width="150" height="100" />
                  <h3>Titulo</h3>
                  </figure>      
               </a>
            </div>
            <div>
              <a class="card">
                  <figure>
                  <img src={''} className="imagem" alt="logo" width="150" height="100" />
                  <h3>Titulo</h3>
                  </figure>      
               </a>
            </div>
            </div>   
             
        </div>
     
    
    
    )
}

export default Home;