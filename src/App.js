import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/ALert';
import TextForm from './components/TextFrom';
import { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg :message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is Enable','success')
    }else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode is Enable','success')
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextModi" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>
   </Router>
    
    </>
  );
}

export default App;
