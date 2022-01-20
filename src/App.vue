<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if(confirm('you sure?')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        })
        
        res.status === 200 ? 
        this.tasks = this.tasks.filter((task) => task.id !== id)
        :
        alert('error')
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}
      
      const res = await fetch(`api/tasks/${id}`, {
          method: 'PUT',
          headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateTask),
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id ? {
        ...task, reminder: data.reminder
      } : task)
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

html,
body {
  font-family: 'Dongle', sans-serif;
}

.container {
  max-width: 500px;
  min-height: 300px;
  margin: 3rem auto;
  padding: 1rem 2rem;
  overflow: auto;
  border: 1px solid rgb(99, 99, 99);
}

a {
    color: unset;
    text-decoration: none;
}

.btn {
    cursor: pointer;
    display: inline-block;
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    padding: 0.6rem 1rem;
    transition: 0.3s ease-in-out;
}

.btn:focus {
    box-shadow: 1px 1px 0 rgb(130, 130, 130);
}

.btn:hover {
    color: #ffffff;
    background: #000000;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
