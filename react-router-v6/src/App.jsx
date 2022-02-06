import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { NotfoundPage } from './pages/Notfound';

function App() {
  return (
    <>
     <div>
      <header>
        <a href="/">Home</a>
        <a href="/posts">Blog</a>
        <a href="/about">About</a>
      </header>
    </div>
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/about" element={ <Aboutpage /> } />
      <Route path="/blog" element={ <Blogpage /> } />
      <Route path="*" element={ <NotfoundPage /> } /> 
    </Routes>
    </>
   
  );
}

export default App;

