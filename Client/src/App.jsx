import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Recom from './components/Recom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
        <Header/>
        <Form/>
        <Recom/>
        <Footer/>
        
    </>
  )
}

export default App
