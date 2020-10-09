<template>
	<div class="hero is-fullheight is-dark background-pattern" :style="`background-image: url(${pattern})`">
		<div class="hero-body container">
			<div class="column">
				<router-link
					:to="{ name: 'Prepare' }"
					tag="button"
					class="button is-rounded is-large cta"
				>
					Begin
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import pattern from "@/assets/img/pattern.svg"
export default {
	data() {
		return {
			pattern
		}
	}
}
</script>

<style scoped>
.cta {
	box-shadow: 0 0 30px black;
}
</style>