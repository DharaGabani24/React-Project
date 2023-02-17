//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enable or not 

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
    <Navbar title="Dhara" abouttext="About_Textutils" mode={mode} toggleMode={toggleMode}/>
    <About/>

    <div className='container my-3'>
    <Textform heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
