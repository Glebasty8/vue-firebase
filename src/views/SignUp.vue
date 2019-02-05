<template>
    <div class="flex column align-center signUp">
        <h3>Let`s create a new account!</h3>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signUp">SignUp</button>
        <span>or go back to <RouterLink to="login">login</RouterLink></span>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        signUp() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => this.$router.replace('home'), err => alert('Opps' + err.message));
        }
    }
}
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        width: 10%;
        margin-top: 20px;
        cursor: pointer;
    }
    p {
        margin-top: 40px;
        font-size: 13px;
    }
   span {
       display: block;
       margin-top: 20px;
       font-size: 11px;
   }
</style>
