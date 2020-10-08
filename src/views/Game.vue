<template>
  <div class="hero is-fullheight is-primary">
      <div class="hero-body container">
        <Grid @selected="move" :content="game.grid">
            <template v-slot:[testSlot]>@</template>
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
            testSlot: "tile-1",
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