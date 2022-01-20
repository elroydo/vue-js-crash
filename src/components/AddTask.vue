<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>task</label>
      <input type="text" v-model="text" name="text" placeholder="add task" />
    </div>
    <div class="form-control">
      <label>date</label>
      <input type="text" v-model="date" name="date" placeholder="date" />
    </div>
    <div class="form-control form-control-check">
      <label>set reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="save task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      date: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("void");
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        date: this.date,
        reminder: this.reminder,
      }

      this.text = ''
      this.date = ''
      this.reminder = false

      this.$emit('add-task', newTask);
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 3rem;
}
.form-control {
  padding: 0.3rem 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  padding: 0.3rem;
  font-size: 12px;
  border: 1px solid rgb(199, 199, 199);
  border-radius: 0px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
}
.form-control-check label {
  flex: 33;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
