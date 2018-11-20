<template>
  <li class="todoitem">
    <slot></slot>
    {{item.task}}
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

