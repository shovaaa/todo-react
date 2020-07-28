import React, { useState } from 'react';
import './App.css';
import DisplayToDo from './DisplayToDo';
import AddToDo from './AddToDo';
import { Container } from 'react-bootstrap';

function App() {
  const [todo, setToDo] = useState([
    
  ]);

  const addToDo = (activity) => {
    const newToDo = [...todo, {activity}];
    setToDo(newToDo);
  } 

  const markDone = (index) => {
    const newToDo = [...todo];
    newToDo[index].isCompleted = true;
    setToDo(newToDo);
  }

  const deleteToDo = (index) => {
    const newToDo = [...todo];
    newToDo.splice(index, 1);
    setToDo(newToDo);
  }

  return ( 
    <Container>
      <div className="App">
        <h1>ToDo</h1>
        <div>
          {todo.map((todo, index)=>(
            <DisplayToDo key={index} index={index} todo={todo} markDone={markDone} deleteToDo={deleteToDo} />
          ))}
          <AddToDo addToDo={addToDo} /> 
        </div>
      </div>
    </Container>
  );
}

export default App;
