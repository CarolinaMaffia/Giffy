import { Link, Route } from "wouter";
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
      <h1>Giffy</h1>
      <Link to='/gif/kiriko'>Gifs de Kiriko</Link>
      <Link to='/gif/Dva'>Gifs de Dva</Link>
      <Link to='/gif/widowmaker'>Gifs de Widowmaker</Link>
      <Link to='/gif/mccree'>Gifs de Cassidy</Link>

        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" 
        />
      </section>
    </div>
  );
}

export default App;
