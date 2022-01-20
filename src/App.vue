<template>
  <div class="container">
    <Header />
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from './components/Tasks';

export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? {
        ...task, reminder: !task.reminder
      } : task)
    },
    deleteTask(id) {
      if(confirm('you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'ichi',
        day: '13:33 03.03.2022',
        reminder: true
      },
      {
        id: 2,
        text: 'ni',
        day: '14:44 04.04.2022',
        reminder: true
      },
      {
        id: 3,
        text: 'san',
        day: '15:55 05.05.2022',
        reminder: false
      }
    ]
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
  border-radius: 33px;
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
    box-shadow: 0 1px 3px rgb(130, 130, 130);
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
