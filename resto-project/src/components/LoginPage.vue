<template>
    <img class="logo" src="../assets/resto-logo.png" />
    <h1>Login Page</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="login">Login</button>
        <p>
            <router-link to="/sign-up">SignUp</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LoginPage",
    data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        async login() {
            // console.log(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
            console.log(result.data);
            if(result.status == 200 && result.data.length > 0) {
                // alert('Sign Up Done');
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push( {name: 'HomePage'} )
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user) {
            this.$router.push( { name: 'HomePage'});
        }
    }
}
</script>