<template>
    <div id="app">
        <newComponent/>
        
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/register">Register comp.</router-link>
        </nav>
    </div>
</template>

<script>
import newComponent from './components/newComponent.vue';
export default {
    name: 'App',
    components: {
        newComponent
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
