<template>
  <todos/>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import Todos from '~/components/Todos.vue'

@Component({
  components: {
    Todos
  }
})
export default class extends Vue {
  @State
  todos
}
</script>
