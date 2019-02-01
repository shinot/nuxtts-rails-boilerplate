<template>
  <div>
    <v-list>
      <v-list-tile v-for="(todo, index) in todos" :key="index">
        <v-list-tile-content>
          <v-list-tile-title v-text="todo.text"/>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'
  import { Todo } from '~/types'

  @Component({})
  export default class Todos extends Vue {
    get todos(): Todo[] {
      return this.$store.state.todos.list
    }

    mounted(): void {
      this.$store.dispatch('todos/fetch').catch()
    }
  }
</script>
