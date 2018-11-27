<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="taskname">
    <input type="number" v-model="priority">
    <button @click="addTask">ADD</button>
    <ul>
      <li v-for="task in tasks">
        {{task.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  data: function () {
    return ({
      taskname: '',
      priority: 0,
    })
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', {
        name: this.taskname,
        priority: this.priority
      })
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
