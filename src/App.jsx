import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';

function App() {
  const [color, setColor]=useState('#fffff');
  function change(e){
    setColor(e.target.value)
    console.log("hello world");
  }
  const [color2,set]=useState('#fffff')
function change2(a){
  set(a.target.value)
}
const [color3,set1]=useState('#fffff')
function change3(b){
set1(b.target.value)
}
const[color4,set2]=useState('#fffff')
function change4(e){
  set2(e.target.value)
}
const[color5,set3]=useState('#fffff')
function change5(e){
  set3(e.target.value)
}
  return (
    <>
    <body style={{backgroundColor:color5}}>
      <div className='box'>
       <div  className='box1'>
<p style={{color:color2}}>UI</p>
<div className='boxh1'>
<h1  style={{color:color}}>FULL</h1><h1 style={{color:color2}}>  STACK</h1>
</div>
<h2 style={{color:color2}}> WEB DEVELOPMENT</h2>
       </div>
       <div className='box2'>
        <div className='b1' style={{backgroundColor:color3}}>HTML</div>
        <div className='b2'   style={{backgroundColor:color4}} >CSS</div>
        <div className='b3' style={{backgroundColor:color3}} >JAVA SCRIPT</div>
        <div className='b4' style={{backgroundColor:color4}}> REACT JS</div>
        <div className='b5'  style={{backgroundColor:color4}} > ANGULAR </div>
        <div className='b6' style={{backgroundColor:color3}} > JQUERY</div>

       </div>
      
      </div>
      <div className='imputs'>
        <input type='color' placeholder='select colour' onChange={change}></input>
        <input type='color'placeholder='select colour' onChange={change2}></input>
        <input type='color'placeholder='select colour' onChange={change3} ></input>
        <input type='color'placeholder='select colour'  onChange={change4}></input>
        <input type='color'placeholder='select colour'  onChange={change5}></input>
       </div>
       </body>
    </>
  )
}

export default App
