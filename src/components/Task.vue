<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'task-reminder' : '', 'task']">
        <h3>
            {{ task.text }}
            <i @click="$emit('delete-task', task.id)" class="fa fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
        
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            task: Object
        },
        methods: {
            onDelete(id) {
                this.$emit('delete-task', id);
            }
        }
    }
</script>

<style scope>
    .fa {
        color: rgb(255, 133, 133);
    }
    .task {
        background: #f4f4f4;
        margin: 0.6rem 0;
        padding: 0.3rem 0.9rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .task-reminder {
        border-left: 3px solid #00a2ff;
    }
</style>