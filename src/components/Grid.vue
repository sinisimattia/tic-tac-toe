<template>
	<div class="tile is-ancestor">
		<div class="tile is-parent is-vertical" v-for="x in content.side" :key="x">
			<!-- TODO Use dynamic slot names -->
			<span
				class="tile is-child box is-clickable"
				v-for="y in content.side"
				:key="y"
				@click="select(x, y)"
			>
				<div class="is-square has-min-size">
					<div class="content is-flex">
						<div class="is-centered">
							<slot :name="`tile-${y - 1 + content.side * (x - 1)}`"
								>({{ x }},{{ y }})</slot
							>
						</div>
					</div>
				</div>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		content: Object
	},
	methods: {
		select(x, y) {
			this.$emit("selected", { x: x, y: y });
		},
	},
};
</script>