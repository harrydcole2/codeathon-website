import './App.css'
import {Route, Routes} from "react-router-dom"
import ErrorBoundary from './ErrorBoundary';
import Home from './Pages/Home';


function App() {

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element = {<Home/>} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
