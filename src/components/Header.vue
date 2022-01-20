<template>
    <header>
        <h1>tasks</h1>
        <Button @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'x' : '+'" />
    </header>
</template>

<script>
    import Button from './Button';

    export default {
        name: 'Header',
        props: {
            showAddTask: Boolean
        },
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