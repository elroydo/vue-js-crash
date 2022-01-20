<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" />
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
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
