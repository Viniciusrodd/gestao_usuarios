<template>
    <div>
        <h1 class="title is-1">Registro de usuário</h1>
        <br>
        <div class="columns is-centered">
            <div class="column is-half">
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
            password: ''
        }
    },

    methods: {
        register(){
            axios.get('http://localhost:8686/')

        }
    }
}
</script>



<style scoped>

</style>