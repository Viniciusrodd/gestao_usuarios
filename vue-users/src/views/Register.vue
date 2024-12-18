<template>
    <div>
        <h1 class="title is-1">Registro de usuário</h1>
        <br>
        <div class="columns is-centered">
            <div class="column is-half">
                <div v-if="errorVar != undefined" class="notification is-danger is-light">
                    {{errorVar}}
                </div>
                <div v-if="sucessVar != undefined" class="notification is-primary">
                    {{sucessVar}}
                </div>

                <label for="nome">Nome:</label>
                <input v-model="name" name="nome" class="input" type="text" placeholder="Nome de usuário"/>
                <hr>

                <label for="email">Email:</label>
                <input v-model="email" name="email" class="input" type="email" placeholder="email@email.com"/>
                <hr>

                <label for="senha">Senha:</label>
                <input v-model="password" name="senha" class="input" type="password" placeholder="******"/>
                
                <button @click="register" class="button is-primary" style="margin-top: 20px">Cadastrar</button>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios';

export default {
    data(){
        return {
            name: '',
            email: '',
            password: '',
            errorVar: undefined,
            sucessVar: undefined
        }
    },

    methods: {
        register(){
            axios.post('http://localhost:8687/user', {
                nameVar: this.name,
                emailVar: this.email,
                passwordVar: this.password
            })
            .then((res) =>{
                this.sucessVar = res.data
                setTimeout(() => {
                    this.sucessVar = undefined
                }, 3000);
            })
            .catch((error) =>{
                this.errorVar = error.response.data  
                setTimeout(() => {
                    this.errorVar = undefined
                }, 3000);
                console.log('error ' + error.response.data)
            }) 
        }
    }
}
</script>



<style scoped>

</style>