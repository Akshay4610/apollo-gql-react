import { Routes, Route } from 'react-router';
import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharactersList />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/:id" element={<Character />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
