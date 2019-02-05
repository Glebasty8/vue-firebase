<template>
    <div class="flex column align-center login">
        <h3>Login</h3>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="login">Login</button>
        <div class="flex column align-center">
            or Sign In with Google
            <button @click="socialLogin" class="flex column align-center social-button">
                <img src="../assets/google.png" alt="Google" />
            </button> 
        </div>
        <p>You don`t have an accound? You can <RouterLink to="/sign-up">create one</RouterLink></p>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(
                () => this.$router.replace('home'), 
                err => alert('Oops' + err.message),
            )
        },
        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(() => {
                    this.$router.replace('home');
                })
                .catch(err => alert('Opps' + err.message))
        }
    }
}
</script>

<style scoped>
    .login {
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
    p a {
        text-transform: underline;
        cursor: pointer;
    }
    .social-button {
        width: 75px;
        background: #fff;
        padding: 10px;
        border-radius: 100%;
        box-shadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)';
        outline: none;
        border: none;
    }
    .social-button:active {
        box-shadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)';        
    }
    .social-button img {
        width: 100%;
    }
</style>
