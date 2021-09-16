import './App.css';
import Cards from './components/uniteCard';
import listOfCards from './components/listOfCards';
// import CollectionCards from './components/cards';

function App() {
  return (
    <div className="App">
      {/* <CollectionCards /> */}
      <Cards />
      <listOfCards />
      
    </div>
  );
}

export default App;
