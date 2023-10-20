import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/GitHubRepos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
