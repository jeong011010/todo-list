import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [lists, setlists] = useState([]);
  const [data,setdata] = useState('')
  const [tmp,settmp]=useState(false)
  const [id,setid] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [time, setTime] = useState(new Date());
  const [succes, setSucces] = useState(0);

  const todolist = lists.map((list)=> (

      list.deleted === false
      ?<div className="items" style={{backgroundColor: darkMode?'black':'rgb(230, 230, 230)',
      color: darkMode?'lightgray':'black'}}
      >
        <div className="item" style={{textDecoration: list.checked?'line-through':'none'}}>
          {list.data}</div>
        <div>
          <span onClick={()=>{list.checked=(!list.checked); if(list.checked){setSucces(succes+1);}else{setSucces(succes-1);}}}>{list.checked?'✅':'🟩'}</span>
          <span onClick={()=>{list.deleted=true; settmp(!tmp);}}>🗑️</span>
        </div>
      </div>
      : null

  ));

  const addData=() => {
    if(data===''){
      alert("할 일을 작성해주세요");
    }
    else{
      setlists([...lists,{id:id,data:data,deleted:false,checked:false,}]); 
      setid(id+1);
    }
  }

  useEffect(()=>{
    const id = setInterval(()=>{
      setTime(new Date());
    }, 1000);
    return (()=>clearInterval(id))
  }, []);

  return (
    <div className="app" style={{backgroundColor: darkMode?'gray':'white'}}>
      <div className="todolist" style={{backgroundColor: darkMode?'black':'rgb(96, 218, 218)'}}>
        <div style={{display: 'flex', justifyContent:"space-between" ,paddingTop: '10px', marginRight: '20px', marginLeft: '20px'}}>
          
          <span style={{color: darkMode?'gray':'white', transitionDuration: '0.5s'}}
          >{time.toLocaleTimeString()}</span>
          
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
              <div >
                <input className="input_item" onChange={event=>setdata(event.target.value)} onKeyPress={ (e) => {if(e.key==='Enter'){addData();}}}
                style={{backgroundColor: darkMode?'gray':'white',color: darkMode?'lightgray':'black'}}/>
                <button className="input_button" onClick={ () => {addData()}}
                style={{color: darkMode?'black':'white',backgroundColor: darkMode?'gray':'#ade2cc'}}>+</button>
              <p>완료 횟수 : {succes}</p>
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
