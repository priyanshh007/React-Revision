import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './A'
import { createContext } from 'react'

const Data=createContext();
function App() {
  const [count, setCount] = useState(0);


  return (
  
    <Data.Provider value={"Priyansh"}>
       <A/>
    </Data.Provider>
   
    
  )
}

export default App;
export {Data};
