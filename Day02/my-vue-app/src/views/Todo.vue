<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newtask">
    <button @click="addTask">ADD</button>
    <ul>
      <li v-for="todo in todos">
        {{todo}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return ({
      newtask: '',
      todos: ['first task', 'second task']
    })
  },
  methods: {
    addTask() {
      this.todos.push(this.newtask)
    }
  }
}
</script>
