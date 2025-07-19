import {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {addTask , removeTask} from '../features/todoslice';

function Todo() {
    const [Input , setInput] = useState('');

    const todo = useSelector((state) => state.todo.value);
   const dispatch = useDispatch();

    const handleaddTask = () => {
    if(Input.trim()){
        dispatch(addTask(Input));
        setInput('');
    }};
const handleRemoveTask = (index) => {
    dispatch(removeTask(index));
};

return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
 <h2>Todo List</h2>
 <input
        type="text"
        value={Input}
        placeholder="Add a task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleaddTask}>Add</button>

      <ul>
        {todo.map((task) => (
          <li key={task.id} style={{ marginTop: '10px' }}>
            {task.text}
            <button
              onClick={() => handleRemoveTask(task.id)}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 

export default Todo;
