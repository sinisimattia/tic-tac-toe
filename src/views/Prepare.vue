<template>
	<div class="hero is-fullheight is-info">
		<div class="hero-body container">
			<div>
				<form class="is-block" @submit.prevent="newSymbol">
					<div class="field has-addons">
						<div class="control">
							<input
								class="input is-rounded"
								type="text"
								placeholder="Your symbol here"
                v-model="symbol"
							/>
						</div>
						<div class="control">
							<button class="button is-rounded is-primary" type="submit"> 📌 </button>
						</div>
					</div>
				</form>
			</div>
		</div>

		<div class="hero-foot p-6 is-flex">
			<router-link class="button is-large is-outlined is-inverted is-info is-inline-block is-centered" :to="{ name: 'Play' }">
				🃏 Play 🃏
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(["addSymbol", "removeSymbol"]),
    newSymbol(){
      this.addSymbol(this.symbol)
      this.symbol = null
    },
  },
  computed: mapGetters(["symbols"]),
  data(){
    return {
      symbol: null,
    }
  }
}
</script>
