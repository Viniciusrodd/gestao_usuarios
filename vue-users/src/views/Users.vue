

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
                                <button class="button is-info">ação1</button> | 
                                <button class="button is-danger">ação2</button>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
    </div>  
</template>


<script>
import axios from "axios";
export default {
    data(){
        return {
            users: [],
            cargo1: 'admin',
            cargo2: 'user'
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
            console.log(this.users)
        })
        .catch((error) =>{
            console.log('created acting failed' + error)
        })
    },

    methods: {
        isAdmin(value){
            if(value > 0){
                return this.cargo1
            }else{
                return this.cargo2
            }
        }
    }
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