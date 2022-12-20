// Import data

// Import components
import './App.css';
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'


function App(){
  return (
    <div>
      <div className="App">
        <div style={{width: '25vw',backgroundColor: 'lightgreen'}}>
          <Sidebar/>
          </div>
        <main style={{width: '75vw',backgroundColor: 'lightblue'}}>
        <SearchBar/>
        <Gallery/>
        </main>
      </div>
    </div>
  );
}

export default App;
