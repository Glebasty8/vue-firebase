<template>
    <div id="app">
        <button class="btn" @click="goBack">Back</button>
        <h1>{{ todo.id }} - {{todo.title}}</h1>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'TodoDetails',
        data() {
            return {
                todo: {}
            }
        },
        methods: {
            goBack () {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        },
        created() {
            axios.get(`https://jsonplaceholder.typicode.com/todos/${this.$route.params.id}`)
                .then(res => this.todo = res.data)
                .catch(err => console.log('err', err));
        }
    }
</script>

<style>

</style>
