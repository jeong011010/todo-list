import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [lists,setlists] = useState('')
  const [data,setdata] = useState('');
  //const todolist = lists.map((list)=> (<li className="item">{list}</li>));

  return (
    <div>
      <div className="todolist">
        <div className="main_title">
          <h1>To do list</h1>
        </div>
        <div>
          <form className="input_section">
            <div>
              <input type="text" className="input_item" onChange={event=>setdata(event.target.value)}/>
              <button className="input_button" onClick={()=>{setdata('');}}>+</button>
              <TodoList/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
