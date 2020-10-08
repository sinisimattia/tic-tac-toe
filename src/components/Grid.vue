<template>
	<div class="tile is-ancestor">
		<div class="tile is-parent is-vertical" v-for="y in size" :key="y">
			<!-- TODO Use dynamic slot names -->
			<span
				class="tile is-child box"
				v-for="x in size"
				:key="x"
			>
				<div class="is-square has-min-size">
					<div class="content is-flex">
            <div class="is-centered">({{ x }},{{ y }})</div>
          </div>
				</div>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		size: {
			type: Number,
			default: 3,
		},
	},
};
</script>