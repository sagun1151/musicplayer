import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Login from './components/Login'
import Search from './components/Search';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/musicplayer" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
