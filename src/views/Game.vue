<template>
  <div class="hero is-fullheight is-primary">
      <div class="hero-body container">
        <Grid @selected="move" :grid="controller.grid">
            <template v-for="type in controller.dictionary.content" v-slot:[type.name]>{{type.value}}</template>
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
            controller: new Game,
            game: {}
        }
    },
    mounted(){
        this.game = this.controller.toJson()
    },
    methods: {
        move(e){
            this.controller.move(e.x, e.y)
            this.game = this.controller.toJson()
        }
    },
}
</script>

<style>

</style>