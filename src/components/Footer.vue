<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <router-link to="/about">about</router-link>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
    a {
        color: rgb(0, 150, 255);
        text-decoration: none;
    }

    footer {
        margin-top: 1rem;
        text-align: center;
    }
</style>