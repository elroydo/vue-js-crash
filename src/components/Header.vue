<template>
    <header>
        <h1>tasks</h1>
        <Button text="add task" />
    </header>
</template>

<script>
    import Button from './Button';

    export default {
        name: 'Header',
        components: {
            Button
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>