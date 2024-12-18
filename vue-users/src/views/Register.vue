<template>
    <div>
        <h1 class="title is-1">Register component</h1>
        <br>
        <div class="columns is-centered">
            <div class="column is-half">
                <label for="nome">Nome:</label>
                <input name="nome" class="input" type="text" placeholder="Nome de usuário"/>
                <hr>
                <label for="email">Email:</label>
                <input name="email" class="input" type="email" placeholder="email@email.com"/>
                <hr>
                <label for="senha">Senha:</label>
                <input name="senha" class="input" type="password" placeholder="******"/>
                <hr>
                <button class="button is-primary">Cadastrar</button>
            </div>
        </div>
    </div>
</template>



<script>
export default {
}
</script>



<style scoped>

</style>