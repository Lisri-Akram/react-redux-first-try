import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
name: "todo",
initialState: {
    value: [
      //  tasks
      { id: 1, text: "Hello", pinged: true },
      { id: 2, text: "Goodbye", pinged: false },
    ],
},
reducers: {
    addTask(state, action) {
      state.value.push({ id: Date.now(), text: action.payload, pinged: false }); // action.payload = text
    },
    removeTask(state, action) {
    
      state.value = state.value.filter(task => task.id !== action.payload); // action.payload = id
    },
    editTask(state, action) {
    const { id, text } = action.payload;
    const task1 = state.value.find((task) =>  task.id === id );
    task1.text = text;
    },
    togglePing(state, action) {
    const id = action.payload;
   const toggle1 = state.value.find((task) =>    task.id === id );
  toggle1.pinged = !toggle1.pinged;
        
    
    }
}
});
export const { addTask, removeTask, editTask, togglePing } = todo.actions;
export default todo.reducer;
