import React from 'react';
import LoginCliente from './LoginCliente';
import CadastroCliente from './CadastroCliente';
import LoginPsicologo from './LoginPsicologo';
import CadastroPsicologo from './CadastroPsicologo';
import {Route, Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
          < Route exact path="/LoginCliente" component={LoginCliente}/>
          < Route exact path="/CadastroCliente" component={CadastroCliente}/>
          < Route exact path="/LoginPsicologo" component={LoginPsicologo}/>
          < Route exact path="/CadastroPsicologo" component={CadastroPsicologo}/>
    </div>
  );
}

export default App;
 

