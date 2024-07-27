import './App.css'
import {Route, Routes} from "react-router-dom"
import ErrorBoundary from './components/ErrorBoundary';
import FeaturedBooks from './pages/FeaturedBooks';
import PastPicks from './pages/PastPicks';
import Discussions from './pages/Discussions';
import Store from './pages/Store';
import About from './pages/About';
import NavBar from './components/NavBar';


function App() {

  return (
    <ErrorBoundary>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<FeaturedBooks/>} />
        <Route path="/pastPicks" element = {<PastPicks/>} />
        <Route path="/discussions" element = {<Discussions/>} />
        <Route path="/store" element = {<Store/>} />
        <Route path="/about" element = {<About/>} />
      </Routes>
    </ErrorBoundary>
      
    
  )
}

export default App;
