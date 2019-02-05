export default {
    loadTodos(state, payload) {
        state.todoList = payload;
    },
    deleteTodo(state, payload) {
        state.todoList = state.todoList.filter(todo => todo.id !== payload)
    },
    addTodo(state, payload) {
        state.todoList = [...state.todoList, payload] 
    }
}