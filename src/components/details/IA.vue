<template>
	<DetailHeader title="The Immigration Act (IA)" />
	<div id="content">
		This overhauled the immigration system, unlike
		<router-link to="irca">IRCA</router-link>. The Immigration Act (Yes, that is
		the name) had lots to do with visas. <br />
		It <strong>increased</strong> the number of visas given out per year by
		almost 400,000 and created a <strong>national visa lottery.</strong>
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
