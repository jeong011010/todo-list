import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [lists, setlists] = useState([])
  const [data,setdata] = useState('')
  const [tmp,settmp]=useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [check, setCheck] = useState(false)

  const todolist = lists.map((list)=> (

      list.deleted === false
      ?<div className="items"  onClick={()=>{setCheck(!check);}} style={{backgroundColor: darkMode?'black':'rgb(230, 230, 230)',
      color: darkMode?'lightgray':'black'}}
      >
        <div className="item" 
        style={{textDecoration: check?'line-through':'none'}}>{list.data}</div>
        <span onClick={()=>{list.deleted=true; settmp(tmp+1)}}>🗑️</span>
      </div>
      : null

  ));
  return (
    <div className="app" style={{backgroundColor: darkMode?'gray':'white'}}>
      <div className="todolist" style={{backgroundColor: darkMode?'black':'rgb(96, 218, 218)'}}>
        <div>
          <div className="container">
            <span>🌞</span>
              <label className="switch">
                <input type="checkbox"
                onChange={()=>setDarkMode(!darkMode)}/>
                <span className="slider round"> </span>
              </label>
            <span>🌛</span>
          </div>
          
        </div>
        <div className="main_title" style={{color: darkMode?'gray':'white'}}>
          <h1>To do list</h1>
          <div>
              <div>
                <input className="input_item" onChange={event=>setdata(event.target.value)}
                style={{backgroundColor: darkMode?'gray':'white',color: darkMode?'lightgray':'black'}}/>
                <button className="input_button" onClick={ () => {setlists([...lists,{data:data,deleted:false}])}}
                style={{color: darkMode?'black':'white',backgroundColor: darkMode?'gray':'#ade2cc'}}>+</button>
              </div>
          </div>
        </div>
      </div>
      <div className="list">
        {todolist}
      </div>


      
    </div>
  );
}

export default App;
