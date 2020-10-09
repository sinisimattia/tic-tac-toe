<template>
	<div class="columns is-vcentered is-marginless is-paddingless">
		<div class="column is-paddingless is-half is-hidden-mobile" v-show="!fullscreen">
			<div class="hero is-fullheight">
				<div class="hero-body container">
					<div class="has-text-centered">
						<h1 class="title is-1">
							<span>Tic</span>
							<span class="has-text-primary">Tac</span>
							<span>Toe</span>
						</h1>
						<h2 class="subtitle is-3">but with emojis</h2>
					</div>
				</div>

				<div class="hero-foot">
					<div class="container">
						<a
							class="is-block has-text-centered has-text-grey"
							href="https://github.com/sinisimattia"
							rel="noopener"
						>
							Mattia Sinisi
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="column is-paddingless">
			<div class="is-block is-full">
				<transition name="fade">
					<router-view />
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fullscreen: false,
		};
	},
	methods: {
		toggleFullScreen() {
			this.fullscreen = !this.fullscreen;
		},
	},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-to,
.fade-leave {
	opacity: 1;
}
</style>