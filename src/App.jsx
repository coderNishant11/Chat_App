//import { useState } from 'react'


import myImage from './assets/1709522865837.jpg';
import './App.css'
import LeftHeader from './components/LeftHeader';
import RightHeader from './components/RightHeader';

function App() {
  

  return (
    <div className="chat-app">
      <div className="left-side">
        <LeftHeader myImage={myImage}/>
      </div>
      <div className="right-side">
      <RightHeader myImage={myImage}/>
      </div>
      
</div>

  )

}

export default App
