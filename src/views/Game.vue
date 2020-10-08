<template>
  <div class="hero is-fullheight is-primary">
      <div class="hero-body container">
        <Grid @selected="move" :grid="controller.grid">
            <template v-for="type in controller.dictionary.content" v-slot:[`type-${type.name}`]>{{type.value}}</template>
        </Grid>
      </div>
  </div>
</template>

<script>
import Grid from "@/components/Grid"
import { Game } from '@/classes/Game'

export default {
    components: {
        Grid,
    },
    data(){
        return {
            emptySlot: "type-0",
            controller: new Game
        }
    },
    methods: {
        move(e){
            console.table(e)
        }
    },
    computed: {
        game(){
            return this.controller.toJson()
        }
    }
}
</script>

<style>

</style>