<template>
	<div class="box tile is-ancestor">
		<div class="tile is-parent is-vertical" v-for="y in size" :key="y">
      <!-- TODO Use dynamic slot names -->
			<button class="tile is-child button is-large is-dark" v-for="x in size" :key="x">({{x}},{{y}})</button>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 3,
    }
  }
};
</script>