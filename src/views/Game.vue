<template>
  <div class="hero is-fullheight is-primary">
      <div class="hero-body container">
        <Grid @selected="move">
            <template v-slot:[testSlot]>@</template>
        </Grid>
      </div>
  </div>
</template>

<script>
import Grid from "@/components/Grid"

export default {
    components: {
        Grid,
    },
    data(){
        return {
            testSlot: "tile-2-2"
        }
    },
    methods: {
        move(e){
            console.table(e)
        }
    }
}
</script>

<style>

</style>