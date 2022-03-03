import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [lists, setlists] = useState([])
  const [data,setdata] = useState('');
  const [tmp,settmp]=useState(0);

  const todolist = lists.map((list)=> (

      list.deleted === false
      ?<div className="item">
        <div>{list.data}</div>
        <span onClick={()=>{list.deleted=true; settmp(tmp+1)}}>🗑️</span>
      </div>
      : null

  ));
  return (
    <div>
      <div className="todolist">
        <div className="main_title">
          <h1>To do list</h1>
          <div>
              <div>
                <input className="input_item" onChange={event=>setdata(event.target.value)}/>
                <button className="input_button" onClick={ () => {setlists([...lists,{data:data,deleted:false}])}}>+</button>
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
