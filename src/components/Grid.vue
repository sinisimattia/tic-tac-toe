<template>
	<div class="tile is-ancestor">
		<div class="tile is-parent is-vertical" v-for="x in content.side" :key="x">
			<span
				class="tile is-child box is-clickable"
				v-for="y in content.side"
				:key="y"
				@click="select(x, y)"
			>
				<div class="is-square has-min-size">
					<div class="content is-flex">
						<div class="is-centered">
							<!-- TODO Use cell content for slot name -->
							<slot :name="grid.find(x - 1, y - 1)"></slot>
						</div>
					</div>
				</div>
			</span>
		</div>
	</div>
</template>

<script>
import { Grid } from "@/classes/Grid";

export default {
	props: {
		grid: {
			type: Grid,
		},
	},
	methods: {
		select(x, y) {
			this.$emit("selected", { x: x, y: y });
		},
	},
	computed: {
		content() {
			return this.grid.toJson();
		},
	},
};
</script>