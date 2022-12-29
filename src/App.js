import React from 'react';
import { useState } from 'react';
import './App.css';
//props들어오는 정보
function TodoList(props) {
  return (
    <div className='app-style'>
      <div className='square-Style'>{props.todoTodoList.name}</div>
    </div>
  );
}

const App = () => {
  const [todoTodoLists, setTodoLists] = useState([]);

  const [name, setName] = useState('');

  // 추가하기
  const addTodoListHandler = () => {
    const newTodoList = {
      id: todoTodoLists.length + 1,

      name: name,
    };
    setTodoLists([...todoTodoLists, newTodoList]);
    //스프레드 문법으로 추가..
  };

  return (
    <div>
      <div className='topBar'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addTodoListHandler}>추가하기</button>
        <h1> TodoList</h1>
      </div>

      <div className='app-Style'>
        {todoTodoLists.map((todoTodoList) => {
          return (
            <TodoList
              todoTodoList={todoTodoList}
              key={todoTodoList.id}
            ></TodoList>
          );
        })}
      </div>
    </div>
  );
};

export default App;

//유저 컴포넌트를 만들기..
//리액트에서 동적으로 변화 하는것은 State 라는 상태 값으로 관리했던것.
//추가 삭제 = useState를 사용해야함...
