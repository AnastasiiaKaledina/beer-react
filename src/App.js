import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import NotFoundBlock from './pages/NotFound';
import PopupBeer from './pages/PopupBeer';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers/:id" element={<PopupBeer />} />
        <Route path="*" element={<NotFoundBlock />} />
      </Routes>
    </div>
  );
}

export default App;
