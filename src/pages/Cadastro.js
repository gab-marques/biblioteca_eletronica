import './Cadastro.css';
import './Home.css';
import {Link} from 'react-router-dom'
function Cadastro(){
    return(
        <div class = "Cadastro">
          <div class="toolbar" role="banner">
         <ul>
            <li> <Link to="/"> Home</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li> 
        </ul>
        </div>
            
     <div class="tres">
     <div class="row input-container">
        <h1 class="title_contato">Cadastro de Livros</h1>
    
        <form method="post" action="#">
            <div class="style-form-input full">
                <input type="text" name="titulo" required />
                <label><i class="icon icon-user-1"></i>  Título</label> 
            </div>
            
            <div class="style-form-input">
                <input type="text" name="data_lancamento" required  />
                <label><i class="icon icon-mail-1"></i> Data de Lançamento</label> 
            </div>
            
            <div class="style-form-input right">
            <select id="appearance-select" name="cod_genero">
                <option >Genero</option>
            </select>
            
            </div>
            
            <div class="style-form-input full">
            <input type="text" name="diretor" required />
            <label><i class="icon icon-info-circled"></i> Escritor</label> 
            </div>
                <div class="" aling = "center"> 
                     <button class="btn-submit" >Enviar</button>
                </div>
            
        </form>
        
    </div>

     </div>
            
            
        </div>
    )
}

export default Cadastro;