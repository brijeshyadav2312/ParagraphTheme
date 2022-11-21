import './App.css';
import React, { useState } from 'react'
import Paragraph from './components/Paragraph';
function App() {
  const [theme, setTheme] = useState("");
    const [size, setSize] = useState("22");
    const [font, setFont]= useState("Arial");
    const [allow, setAllow] = useState("");
    const [weight, setWeight] = useState("");
    console.log(theme,size,font)
  return (
    <div className='parent'>
      <div className='navbar'>
      <div>
        <select onChange={(e) => {setAllow(e.target.value)}}>
            <option>Enable Edit</option>
            <option>Disable Edit</option>
        </select>
      </div>
      <div>
        <select disabled={allow==='Disable Edit'?'disabled':""} onChange={(e) => {setTheme(e.target.value)}} >
            <option>Black</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Red</option>
        </select>
      </div>
      <div>
        <select defaultValue={22} disabled={allow==='Disable Edit'?'disabled':""} onChange={(e) => {setSize(e.target.value)}}>
            <option>10</option>
            <option>12</option>
            <option>18</option>
            <option>20</option>
            <option>22</option>
            <option>25</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
        </select>
      </div>
      <div>
        <select defaultValue={'Arial'} disabled={allow==='Disable Edit'?'disabled':""} onChange={(e) => {setFont(e.target.value)}}>
            <option>verdana</option>
            <option>Arial</option>
            <option>Trebuchet MS</option>
            <option>Courier New</option>
            <option>Monospace</option>
            <option>Brush Script MT </option>
        </select>
      </div>
      <div>
        <select defaultValue={'normal'} disabled={allow==='Disable Edit'?'disabled':""} onChange={(e) => {setWeight(e.target.value)}}>
            <option>normal</option>
            <option>bold</option>
            <option>bolder</option>
            <option>lighter</option>
        </select>
      </div>
      </div>
      <Paragraph fontSize={size} fontFamily={font} fontColor={theme} fontWeight={weight}/>
    </div>
  );
}

export default App;
