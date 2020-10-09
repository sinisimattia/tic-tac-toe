<template>
	<div class="tile is-ancestor">
		<div class="tile is-parent is-vertical" v-for="x in grid.side" :key="x">
			<span
				class="tile is-child box is-clickable"
				v-for="y in grid.side"
				:key="y"
				@click="select(x - 1, y - 1)"
			>
				<div class="is-square has-min-size">
					<div class="content is-flex">
						<div class="is-centered" :key="toggle">
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
	data(){
		return {
			toggle: false,
		}
	},
	methods: {
		select(x, y) {
			this.$emit("selected", { x: x, y: y });
			this.update()
		},
		update(){
			this.toggle = !this.toggle
		}
	},
};
</script>