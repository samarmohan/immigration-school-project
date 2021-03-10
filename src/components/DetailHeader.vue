<template>
	<h4 id="header">Details and explanation of {{ title }}</h4>
	<hr />
</template>
<script>
export default {
	name: "DetailHeader",
	props: {
		title: String,
	},
};
</script>
<style>
#header {
	margin: 15px;
}
</style>
