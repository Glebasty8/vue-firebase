<template>
  <div id="app">
    <AddTodo @add-todo="addTodo" />
      <LogoutModal 
        v-if="isConfirmationModalOpened"
        @close="closeConfirmationModal"
        @logOut="logOut"
      />
    <Todos :todos="todoList" @del-todo="deleteTodo" />
    <button class="btn" @click="openConfirmationModal">Log Out</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters, mapActions } from 'vuex';
import Todos from '@/components/Todos.vue';
import AddTodo from '@/components/AddTodo.vue';
import LogoutModal from '@/components/Modals/LogoutModal';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo,
    LogoutModal,
  },
  data() {
    return {
      todos: [],
      isConfirmationModalOpened: false,
    }
  },
    // computed: {
    //     todoList() {
    //       return this.$store.getters.getTodos;
    //     }
    // },
  computed: {
    ...mapGetters({
      todoList: 'getTodos'
    })
  },
  methods: {
    deleteTodo(id) {
      this.deleteTodo(id);
      // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      // .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
      // .catch(err => console.log(err))
    },
    addTodo(newTodo) {
      this.addTodo(newTodo);
      // const { title, completed } = newTodo;
      // axios.post('https://jsonplaceholder.typicode.com/todos',
      // {
      //   title, completed
      // })
      // .then(res => this.todos = [...this.todos, res.data])
      // .catch(err => console.log(err))
    },
    logOut() {
      firebase.auth().signOut().then(() => this.$router.replace('login'));
    },
    openConfirmationModal() {
      this.isConfirmationModalOpened = true;
    },
    closeConfirmationModal() {
      this.isConfirmationModalOpened = false;
    },
    ...mapActions(['loadTodos', 'deleteTodo', 'addTodo'])
  },
  created() {
    this.loadTodos();
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    // .then(res => this.$store.dispatch('loadTodos', res.data))
    // .catch(err => console.log(err))
    // this.$store.dispatch('loadTodos');
  }

}
</script>

