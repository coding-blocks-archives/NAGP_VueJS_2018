<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newtask">
    <button @click="addTask">ADD</button>
    <ul>
      <TodoItem v-for="todo in todos" v-bind:item="todo">
        {{todo.id}}
      </TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  data: function () {
    return ({
      newtask: '',
      todos: [
        {id: 1, task: 'first task', done: false},
        {id: 2, task: 'second task', done: true},
      ]
    })
  },
  methods: {
    addTask() {
      this.todos.push(this.newtask)
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style>
.todoitem {
  font-size: 20pt;
}
</style>
