<template>
    <div class="TodoItem">
        <li>{{todo2}} -{{todo.id}} {{todo.text}}</li>
    </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo : String,
    todo2 : String

  }
}
</script>
