<template>
    <div>
        <h1 class="title is-1">Login de usuário</h1>
        <br>
        <div class="columns is-centered">
            <div class="column is-half">
                <div v-if="errorVar != undefined" class="notification is-danger is-light">
                    {{errorVar}}
                </div>
                <div v-if="sucessVar != undefined" class="notification is-primary">
                    {{sucessVar}}
                </div>

                <label for="email">Email:</label>
                <input v-model="email" name="email" class="input" type="email" placeholder="email@email.com"/>
                <hr>

                <label for="senha">Senha:</label>
                <input v-model="password" name="senha" class="input" type="password" placeholder="******"/>
                
                <button @click="login" class="button is-primary" style="margin-top: 20px">
                    Logar
                </button>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios';

export default {
    data(){
        return {
            email: '',
            password: '',
            errorVar: undefined,
            sucessVar: undefined,
            tokenVar: ''
        }
    },

    methods: {
        login(){
            axios.post('http://localhost:8687/login', {
                emailVar: this.email,
                passwordVar: this.password
            })
            .then((res) =>{
                localStorage.setItem('token', res.data.token)
                this.$router.push('/admin/users')
            })
            .catch((error) =>{
                this.errorVar = error.response.data.error
                setTimeout(() => {
                    this.errorVar = undefined
                }, 3000);
                console.log('error ' + error.response.data.error)
            }) 
        }
    }
}
</script>



<style scoped>

</style>