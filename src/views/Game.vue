<template>
  <div class="hero is-fullheight is-primary">
      <div class="hero-head container section">
          <p>It's <span class="tag is-info">{{controller.turn.symbol}}</span>'s turn</p>
      </div>
      <div class="hero-body container">
        <Grid @selected="move" :grid="controller.grid">
            <template v-for="type in controller.dictionary.content" v-slot:[type.name]>{{type.value}}</template>
        </Grid>
      </div>

      <div class="hero-foot container">
          <div class="section">
            <router-link class="button is-dark" :to="{name: 'Home'}">Back</router-link>
          </div>
      </div>
  </div>
</template>

<script>
import Grid from "@/components/Grid"
import { Game } from '@/classes/Game'
import { mapGetters } from "vuex"

export default {
    components: {
        Grid,
    },
    data(){
        return {
            controller: {},
        }
    },
    computed: mapGetters(["size", "symbols"]),
    beforeMount(){
        this.controller = new Game(this.size, this.symbols)
    },
    methods: {
        move(e){
            this.controller.move(e.x, e.y)
        }
    },
    watch: {
        'controller.winner': {
            handler(value){
                alert(value);
            }
        }
    }
}
</script>