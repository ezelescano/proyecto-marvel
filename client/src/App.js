import NavBar from './components/NavBar/NavBar';
import { Detail, Form, Home, Landing, About } from './views';
import { Route, Routes, useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <div>

      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>

      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>

      <Routes>
        <Route path='/form' element={<Form />} />
      </Routes>

      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
