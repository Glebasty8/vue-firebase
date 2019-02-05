import axios from 'axios';

export default {
    loadTodos(context) {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => context.commit('loadTodos', res.data))
        .catch(err => console.log(err))
    },
    deleteTodo(context, todoId) {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(res => context.commit('deleteTodo', todoId))
        .catch(err => console.log(err))
    },
    addTodo(context, newTodo) {
        const { title, completed } = newTodo;
        axios.post('https://jsonplaceholder.typicode.com/todos',
        {
            title, completed
        })
        .then(res => context.commit('addTodo', res.data))
        .catch(err => console.log(err))
    }
}