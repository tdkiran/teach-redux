import './App.css';
import UserInput from './component/InputComponent/UserInput';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>TODO Manager</h1>
      <UserInput />
      <TodoList />
    </div>
  );
}

export default App;
