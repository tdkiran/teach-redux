import './App.css';
import UserInput from './component/InputComponent/UserInput';
import TodoList from './component/TodoList';
import ListCount from './component/ListCount';

function App() {
  return (
    <div className="todo-app">
      <h1>TODO Manager</h1>
      <UserInput />
      <TodoList />
      <ListCount />
    </div>
  );
}

export default App;
