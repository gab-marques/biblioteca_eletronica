import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'


function App(){
 
  return(

    /* Aqui é meu sistema de rotas */
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </Router>
  );
 
}

export default App;
