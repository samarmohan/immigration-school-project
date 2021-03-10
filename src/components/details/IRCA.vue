<template>
	<DetailHeader title="The Immigration Reform and Control Act (IRCA)" />
	<div id="content">
		This act added <strong>penalties</strong> for hiring unauthorized workers,
		made 3 million people legal, but did <strong>not</strong> do enough to
		actually fix the system.
	</div>
	<router-link class="btn btn-outline-warning" to="/laws">Back</router-link>
</template>

<script>
import DetailHeader from "@/components/DetailHeader";

export default {
	name: "IRCA",
	components: {
		DetailHeader,
	},
};
</script>
