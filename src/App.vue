<template>
	<div class="columns is-vcentered is-marginless is-paddingless">
		<div class="column is-paddingless is-half is-hidden-mobile">
			<div class="hero is-fullheight">
				<div class="hero-body container">
					<div class="has-text-centered">
						<h1 class="title is-1">
							<span>Tic</span>
							<span class="has-text-primary">Tac</span>
							<span class="has-text-success">Vue</span>
						</h1>
						<h2 class="subtitle is-3">but with emojis</h2>
					</div>
				</div>

				<div class="hero-foot">
					<div class="container section">
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