import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/ItemCount";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      
      <ItemListContainer/>
      <ItemCount/>
                  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
