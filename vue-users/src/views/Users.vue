

<template>
    <div id="pai">
        <h1 class="title is-1">Painel Administrativo</h1>

        <div class="filho">
            <table class="table is-bordered">
                    <thead>
                        <tr>
                            <th>nome</th>
                            <th>email</th>
                            <th>cargo</th>
                            <th>ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>
                                {{isAdmin(user.role)}}
                            </td>
                            <td>
                                <button class="button is-success">Editar</button> | 
                                <button class="button is-danger" @click="modalActive(user.id)">Deletar</button>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>


        <!-- Modal -->
        <div class="modal" :class="{'is-active': isModal}">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Confirmação de Exclusão</p>
            </header>
            <section class="modal-card-body">
                <p>Você tem certeza de que deseja excluir este item? Esta ação não pode ser desfeita.</p>
            </section>
            <footer class="modal-card-foot is-justify-content-center">
                <button class="button is-danger" @click="deleteData">Excluir</button>
                <button class="button" @click="hideModal">Cancelar</button>
            </footer>
        </div>
        </div>
    </div>  
</template>


<script>
import axios from "axios";
export default {
    data(){
        return {
            users: [],
            cargo1: 'Administrador',
            cargo2: 'Usuário comum',
            isModal: false,
            idUser: 0
        }
    },  

    methods: {
        isAdmin(value){
            if(value > 0){
                return this.cargo1
            }else{
                return this.cargo2
            }
        },

        modalActive(id){
            this.idUser = id
            return this.isModal = true
        },

        hideModal(){
            return this.isModal = false
        },

        deleteData(){
            var req = {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            }

            axios.delete(`http://localhost:8687/user/${this.idUser}`, req)
                .then(() =>{
                    console.log('User success deleted')
                    this.isModal = false
                    window.location.reload()
                    alert('Usuário deletado com sucesso')
                })
                .catch((error) =>{
                    console.log('User deleted failed' + error)
                })
        }
    },

    created(){
        var req = {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }

        axios.get('http://localhost:8687/users', req)
        .then((data) =>{
            this.users = data.data.users
        })
        .catch((error) =>{
            console.log('created acting failed' + error)
        })
    },
}
</script>



<style>
    html, body{
        margin: 0;
        padding: 0;
    }
    #pai{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px 0px 10px 0px;
        width: 100%;
    }
</style>