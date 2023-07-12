import logo from './logo.svg';
import './App.css';
import { ListaDeTareas } from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='logo-texto'>React</p>
      </header>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
