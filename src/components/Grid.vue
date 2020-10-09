<template>
	<div class="is-unselectable">
		<table class="table is-bordered">
			<tbody>
				<tr v-for="x in grid.side" :key="x">
					<td
						class="is-clickable"
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
					</td>
				</tr>
			</tbody>
		</table>
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
	data() {
		return {
			toggle: false,
		};
	},
	methods: {
		select(x, y) {
			this.$emit("selected", { x: x, y: y });
			this.update();
		},
		update() {
			this.toggle = !this.toggle;
		},
	},
};
</script>