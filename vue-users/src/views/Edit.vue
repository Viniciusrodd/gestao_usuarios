<template>
    <div>
        <h1 class="title is-1">Edição de usuário</h1>
        <br>
        <div class="columns is-centered">
            <div class="column is-half">
                <div v-if="errorVar != undefined" class="notification is-danger is-light">
                    {{errorVar}}
                </div>
                <div v-if="sucessVar != undefined" class="notification is-primary">
                    {{sucessVar}} <br>
                    você será redirecionado á tela de admin em 3..2..1
                </div>

                <label for="nome">Nome:</label>
                <input v-model="name" name="nome" class="input" type="text" :placeholder="userName"/>
                <hr>

                <label for="email">Email:</label>
                <input v-model="email" name="email" class="input" type="email" :placeholder="userEmail"/>
                
                <button @click="edit" class="button is-primary" style="margin-top: 20px">Editar</button>
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
            sucessVar: undefined,
            userIdParams: this.$route.params.id,
            userName: '',
            userEmail: ''
        }
    },

    created(){
        var req = {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }

        axios.get(`http://localhost:8687/user/${this.userIdParams}`, req)
            .then((response) =>{
                console.log('user founded: ', response.data)

                this.userName = response.data.name
                this.userEmail = response.data.email
            })
            .catch((error) =>{
                console.log('Error at found user id', error)
                this.$router.push('/admin/users')
            })
    }, 

    methods: {
        edit(){
            var req = {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            }
            axios.put('http://localhost:8687/user',{
                id: this.userIdParams,
                name: this.name,
                email: this.email,
            }, req)
            .then((res) =>{
                this.sucessVar = res.data
                setTimeout(() => {
                    this.sucessVar = undefined
                    this.$router.push('/admin/users')
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


<style>

</style>