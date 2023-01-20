import { Route } from "wouter";
import './App.css';
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
      <h1>Giffy</h1>
        <Route 
          component={Home}
          path="/" 
        />
        <Route 
          component={SearchResults}
          path="/search/:keyword" 
        />
      </section>
    </div>
  );
}

export default App;
