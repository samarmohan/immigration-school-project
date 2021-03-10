<template>
	<DetailHeader title="Legal Immigration and Family Equity (LIFE)" />
	<div id="content">
		Added <strong>new</strong> temporary visas and provided
		<strong>relief</strong> for people wrongly denied the ability to file for
		amnesty. Also allowed immediate relatives of U.S. citizens and people
		approved for residency to adjust their status to permanent resident.
	</div>
	<router-link class="btn btn-outline-warning" to="/laws">Back</router-link>
</template>

<script>
import DetailHeader from "@/components/DetailHeader";

export default {
	name: "IA",
	components: {
		DetailHeader,
	},
};
</script>
