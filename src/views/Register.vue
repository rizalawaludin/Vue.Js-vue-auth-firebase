<template>
    <div>
        <div class="error" v-if="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            <h3>Register</h3>

            <div class="email">
                <input type="email" v-model="email" placeholder="Email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="Password">
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    methods: {
        async pressed() {
            try{
                const val = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                console.log(val)
                this.$router.replace({name: "dashboard"});
            }catch(err){
                console.log(err)
            }
        }
    },
    data() {
        return{
            email: '',
            password: '',
            error: '',
        }
    }
}
</script>

<style lang="scss" scoped>
.error{
    color : red;
    font-size : 18px;
}
input{
    width : 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
}
button{
    width: 400px;
    height: 75px;
    font-size: 100%
}
</style>