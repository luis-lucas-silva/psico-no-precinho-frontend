import React from 'react';
import teste from './teste';
//import teste2 from './teste2';
import LoginCliente from './LoginCliente';
import CadastroCliente from './CadastroCliente';
import AlteraCadastroCliente from './AlteraCadastroCliente';
import LoginPsicologo from './LoginPsicologo';
import CadastroPsicologo from './CadastroPsicologo';
import AlteraCadastroPsicologo from './AlteraCadastroPsicologo';
//import CadastroPsicologo2 from './CadastroPsicologo2';
import {Route, Link} from "react-router-dom";
//< Route exact path="/teste2" component={teste2}/>

function App() {
    return (
        <div className="App">
          < Route exact path="/teste" component={teste}/>
          < Route exact path="/LoginCliente" component={LoginCliente}/>
          < Route exact path="/CadastroCliente" component={CadastroCliente}/>
          < Route exact path="/AlteraCadastroCliente" component={AlteraCadastroCliente}/>
          < Route exact path="/LoginPsicologo" component={LoginPsicologo}/>
          < Route exact path="/CadastroPsicologo" component={CadastroPsicologo}/>
          < Route exact path="/AlteraCadastroPsicologo" component={AlteraCadastroPsicologo}/>
    </div>
  );
}

export default App;
 

