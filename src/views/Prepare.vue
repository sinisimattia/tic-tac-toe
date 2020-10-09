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
								maxlength="3"
								v-model="symbol"
							/>
						</div>
						<div class="control">
							<button class="button is-rounded is-info is-light" type="submit">
								📌
							</button>
						</div>
					</div>
				</form>

				<div class="box is-rounded my-3">
					<ul v-if="symbols.length">
						<li v-for="(s, i) in symbols" :key="i" class="columns is-vcentered">
							<div class="column">
								<span class="is-block is-centered">{{ s }}</span>
							</div>
							<div class="column is-one-third has-text-center">
								<button
									class="button is-danger is-small is-rounded is-block is-centered"
									@click="removeSymbol(i)"
								>
									Remove
								</button>
							</div>
						</li>
					</ul>

					<p v-else>
						No symbols created, you'll be using the
						<strong>default ones</strong>.
					</p>
				</div>
			</div>
		</div>

		<div class="hero-foot p-6 is-flex">
			<router-link
				class="button is-large is-outlined is-inverted is-info is-inline-block is-centered"
				:to="{ name: 'Play' }"
			>
				🃏 Play 🃏
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
	methods: {
		...mapMutations(["addSymbol", "removeSymbol"]),
		newSymbol() {
			if (this.symbol) {
				this.addSymbol(this.symbol);
				this.symbol = null;
			}
		},
	},
	computed: mapGetters(["symbols"]),
	data() {
		return {
			symbol: null,
		};
	},
};
</script>
